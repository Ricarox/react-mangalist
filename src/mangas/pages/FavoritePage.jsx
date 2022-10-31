
import { useSelector } from "react-redux";
import { MangaCard } from "../components";


export const FavoritePage = () => {

  const { favorites } = useSelector(state => state.auth)
   


  return (
    <>
      <div className="row rows-cols-1 row-cols-md-4 g-4 ">

        {
          favorites.map(favorite => (

            <MangaCard
              key={favorite.cId}
              {...favorite}
            />

          ))
        }



      </div>


    </>
  )
}

