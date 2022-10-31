
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



import { getMangaFavorite } from "../store/slice/auth/thunks";


export const loadMangasFavoriteSelect =  (id) => {
    
    const dispatch = useDispatch();
    
    id= Number(id)

    
    
    useEffect(() => {
        
            dispatch(getMangaFavorite(id))
            



    }, [id])

    const auth = useSelector(state => state.auth)


    return auth




}