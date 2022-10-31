import { Link as RouterLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/slice/auth';




const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'The email must have a @.' ],
  password: [ (value) => value.length >=6 , 'The password must have more than 6 characters.' ],
  displayName: [ (value) => value.length >=1 , 'Name is required.' ],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { displayName, email, password, onInputChange, formState, 
    isFormValid, displayNameValid, emailValid, passwordValid
   } = useForm(formData, formValidations);


  const OnSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
   
  }



  return (
    <AuthLayout title='Register'>
            <form onSubmit={OnSubmit} className='animate__animated animate__fadeInUp animate__faster'>

              <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Name" 
                    type="text" 
                    placeholder='Name'
                    fullWidth
                    name='displayName'
                    value={ displayName }
                    onChange = { onInputChange }
                    error= { !!displayNameValid && formSubmitted  }
                    helperText= { displayNameValid }
                    />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Email" 
                    type="email" 
                    placeholder='correo@google.com'
                    fullWidth
                    name='email'
                    value={ email }
                    onChange = { onInputChange }
                    error= { !!emailValid && formSubmitted }
                    helperText= { emailValid }
                    
                    />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Password" 
                    type="password" 
                    placeholder='Password'
                    fullWidth
                    name='password'
                    value={ password }
                    onChange = { onInputChange  }
                    error= { !!passwordValid  && formSubmitted}
                    helperText= { passwordValid }
                    />
                </Grid>


                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} >
                  <Grid 
                    item 
                    xs={ 12 } 
                    display={ !!errorMessage ? '' : 'none' }
                  >
                    <Alert severity='error'>{ errorMessage }</Alert>
                  </Grid>

                
                  <Grid item xs={ 12 } >
                    <Button 
                      disabled= { isCheckingAuthentication }
                      variant='contained' 
                      fullWidth
                      type='submit'
                    >
                      Crear Cuenta
                    </Button>
                  </Grid>
                </Grid>


                <Grid container direction='row' justifyContent='end'>
                  <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                  <Link component={ RouterLink } color='inherit' to="/auth/login">
                    Ingresar
                  </Link>

                </Grid>

              </Grid>

            </form>

      </AuthLayout>
  )
}

