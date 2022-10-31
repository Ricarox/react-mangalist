import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangasByIdC } from "../store/slice/mangaList/thunks";

export const getMangaById = (id) => {
    const dispatch = useDispatch();

    

    useEffect(() => {

        dispatch(getMangasByIdC(id))


    }, [id])
  
    const {mangaSelect} = useSelector(state => state.mangaList)

        return mangaSelect

}
