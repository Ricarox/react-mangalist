
import { mangaListApi } from '../../../api/mangaListApi';

import { setMangas, startLoadingMangas, setMangasAll, setMangaSelect } from './mangalistSlice';

export const getMangas = (page = 1) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingMangas());


        const { data: firstData } = await mangaListApi.get(`/manga`, {
            params: {
                limit: 24,
                page
            }
        });

        dispatch(setMangas({ mangas: firstData.data, page: page }));
    }

}

export const getMangasAll = (q) => {


    return async (dispatch, getState) => {

        dispatch(startLoadingMangas());


        const { data: firstData } = await mangaListApi.get(`/manga`, {
            params: {
                limit: 24,
                q
            },

        });



        dispatch(setMangasAll({ mangas: firstData.data }));
    }

}
export const getMangasByIdC = (id) => {


    return async (dispatch, getState) => {

        dispatch(startLoadingMangas());


        const { data: firstData } = await mangaListApi.get(`/manga/${id}`, {
            params: {
                limit: 24,
                
            },

        });


        // console.log(firstData);

        
        dispatch(setMangaSelect({ mangaSelect: firstData.data }));
    }

}











