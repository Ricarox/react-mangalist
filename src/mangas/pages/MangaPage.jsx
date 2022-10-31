
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { IconButton, TableCell, Table, TableHead, TableRow, Paper, TableContainer } from '@mui/material';
import { ArrowBack, FavoriteRounded } from '@mui/icons-material';



import { getMangaById } from '../../helpers/getMangaById';

import { MangaChapters } from '../components/MangaChapters';
import { useDispatch, useSelector } from 'react-redux';
import { StartDeletingFavorite, startNewMangaFavorite } from '../../store/slice/auth/thunks';
import { getMangaChapters } from '../../helpers/getMangaChapters';
import { loadMangasFavoriteSelect } from '../../helpers/loadMangasFavoriteSelect';



export const MangaPage = () => {

  const dispatch = useDispatch();


  const navigate = useNavigate();
 

  const { id } = useParams();

  const manga = getMangaById(id);
  
  
  
  const { isSaving, favorites } = useSelector(state => state.auth)

    
  

  const favorite = favorites.find(favorite => favorite.cId === manga.mal_id);


    
   


  
  const onSavingFavorite = () => {
    {
      favorite
      ?dispatch(StartDeletingFavorite())
      :dispatch(startNewMangaFavorite(manga))
    }
    
  }


  const chaptersViewed = getMangaChapters(favorite?.chapters, favorite?.lastView);

  const onNavigateBack = () => {
    navigate(-1);

  }



  if (!manga ) {
    return <Navigate to={'/'} />
  }

  return (

    <div className="row mt-5 ">



      <div className="col-3">
        <img
          src={manga.images?.jpg.image_url}
          alt={manga.title}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />

      </div>

      <div className="col-8">
        <h3>{manga.title}</h3>
        <ul className="list-group list-group-flush">
          <li style={{ backgroundColor: '#c0c0c0' }} className="list-group-item "> <b>MangaSynopsis:</b> {manga.synopsis} </li>


        </ul>



        <div className='container col-8 mt-2'>

          {
            (chaptersViewed.length !== 0 )
            &&
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1 }} >
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>

                    <TableCell align="right">Check</TableCell>
                  </TableRow>
                </TableHead>

                {
                  chaptersViewed.map(chapters => (

                    <MangaChapters key={chapters.idc}
                      {...chapters} mangaId={id} />


                  ))
                }

              </Table>
            </TableContainer>
          }


        </div>




        <IconButton
          onClick={onNavigateBack}
          size='large'
          sx={{
            color: 'white',
            backgroundColor: { backgroundColor: '#000000', opacity: 0.9 },
            ':hover': { backgroundColor: 'white', color: '#000000' },
            position: 'fixed',
            left: 50,
            bottom: 50
          }}
        >
          <ArrowBack sx={{ fontSize: 30 }} />Back

        </IconButton>


        <IconButton
          onClick={onSavingFavorite}
          disabled={isSaving}
          size='small'
          sx={{
            color: favorite ? '#ffc107' : '',
            ':hover': { color: '#ffc107', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            top: 100
          }}
        >
          <FavoriteRounded sx={{ fontSize: 30 }} />

        </IconButton>

      </div>

    </div >
  )
}
