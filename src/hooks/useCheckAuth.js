import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";


import { FirebaseAuth } from '../firebase/config';
import { login, logout, setFavoritesMangas, startLoadingFavoritesMangas } from '../store/slice/auth';


export const useCheckAuth = () => {

  const { status, isSaving } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async (user) => {

      
      if (!user) return dispatch(logout());


      const { uid, email, displayName, favorites } = user;
      dispatch(login({ uid, email, displayName, favorites }))
      
      dispatch(startLoadingFavoritesMangas());
      
    })


  }, [isSaving]);
  return {
    status
  }
}
