import { useSelector } from "react-redux";
import { MangaCard } from "../components/MangaCard";

export const SearchPage = () => {
    const { mangas } = useSelector(state => state.mangaList)
    



    return (

        <>
            <div className="row rows-cols-1 row-cols-md-4 g-4">

                {
                    mangas.map(manga => (

                        <MangaCard
                            key={manga.mal_id}
                            {...manga}
                        />

                    ))
                }


            </div>
        </>
    )
}

