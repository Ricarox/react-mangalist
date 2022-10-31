import { useSelector } from "react-redux";



export const getMangasByName = (name = '') => {
    
    const { mangas } = useSelector(state => state.mangaList)
   
    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];

    return mangas.filter(
        manga => manga.title.toLocaleLowerCase().includes(name)

    );


}

