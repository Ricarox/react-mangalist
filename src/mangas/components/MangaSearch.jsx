import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { getMangasByName } from '../../helpers/getMangasByName';
import { useForm } from '../../hooks/useForm';
import { getMangasAll } from '../../store/slice/mangaList/thunks';




export const MangaSearch = () => {


  const dispatch = useDispatch();



  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const mangas = getMangasByName(q);

  const showError = (q.length > 0) && mangas.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;


    dispatch(getMangasAll(searchText));
    navigate(`/search/?q=${searchText}`)

  }

  return (
    <>

      <form onSubmit={onSearchSubmit} className="d-flex col-6" role="search">
        
        <input
                  type="search"
                  placeholder="Search a manga"
                  className="form-control me-2 col-12"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={onInputChange}
                />
        <button className="btn btn-outline-warning ml-2" type="submit">Search</button>
      </form>

      <div className="container" align="center" >
        <div
          aria-label='alert-danger'
          className="alert alert-danger animate__animated animate__fadeIn mt-2"
          style={{ display: showError ? '' : 'none', position: "fixed", top: 60  }}
          
          >
          No manga with <b>{q}</b>
        </div>
      </div>

    </>
  )
}