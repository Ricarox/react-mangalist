import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { getMangas } from '../../store/slice/mangaList/thunks';
import { MangaCard } from './MangaCard';








export const MangaList = () => {

  const { mangas, page, isLoading } = useSelector(state => state.mangaList)
  const dispatch = useDispatch();
  



  return (

    <>
      <div className="row rows-cols-1 row-cols-md-4 g-4 ">

        {
          mangas.map(manga => (

            <MangaCard
              key={manga.mal_id}
              {...manga}
            />

          ))
        }


      </div>

      <div className='container '>

        
      <IconButton
        disabled={page === 1 ? true : false || isLoading ? true : false}
        onClick={() => dispatch(getMangas(page - 1))}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: { backgroundColor: '#000000', opacity: 0.9 },
          ':hover': { backgroundColor: 'white', color:'#000000' },
          position: 'fixed',
          left: 50,
          bottom: 50
        }}
      >
        <ArrowBackIos  sx={{ fontSize: 30 }} />Previus

      </IconButton>

      <IconButton
        disabled={isLoading ? true : false}
        onClick={() => dispatch(getMangas(page + 1))}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: { backgroundColor: '#000000', opacity: 0.9 },
          ':hover': { backgroundColor: 'white', color:'#000000' },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        Next<ArrowForwardIos  sx={{ fontSize: 30 }} />

      </IconButton>
      
      </div>


    </>



  )
}
