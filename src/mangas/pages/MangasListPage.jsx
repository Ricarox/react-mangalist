import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMangas } from '../../store/slice/mangaList/thunks';
import { MangaList } from '../components';

export const MangasListPage = () => {
    
  const { page } = useSelector(state => state.mangaList)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMangas(page));

    }, [])
    

    return (
        <>
            <MangaList />

        </>
    )
}
