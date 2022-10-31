

import { Link } from 'react-router-dom';


export const MangaCard = ({
    mal_id,
    title,
    images,
    synopsis,
    chapters,
    
    
    //favorite
    img,
    cId
    
    
    
}) => {
  
    return (
        <div className="col animate__animated animate__fadeIn"  >


            <div className="col mt-4" >
                <div>
                    <Link to={`/manga/${mal_id || cId}`}>

                        <img
                            id='card'
                            src={images?.jpg.large_image_url || img}
                            className="card-img-top img-thumbnail"
                            style={{width: 100 + "%", height: 400 + "px"}}
                            

                            alt={title}
                        />


                    </Link>
                    <div className="card-body bg-dark text-white">
                        <h5 className="card-title text-warning">{title}</h5>

                        <p className="card-text">{synopsis?.substring(0, 50)}...</p>

                        <p className="card-text">{chapters ? chapters : "Unknown"}</p>

                    </div>
                </div>
            </div>


        </div >
    )
}
