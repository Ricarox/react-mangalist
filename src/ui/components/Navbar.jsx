
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { MangaSearch } from '../../mangas/components/MangaSearch';
import { startLogout } from '../../store/slice/auth';




export const Navbar = () => {

    const auth = useSelector(state => state.auth)


    const dispatch = useDispatch();

    const returnHome = () => {

        dispatch(getMangas(page = 1))
    }




    const onLogout = () => {

        dispatch(startLogout())

    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">

                <Link
                    className="navbar-brand primary"
                    to="/"
                    onClick={returnHome}

                >
                    MangaList
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                to="/"
                            >
                                Manga
                            </NavLink>


                            {
                                auth.status !== "not-authenticated"
                                    ?
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                        to="/favorite"
                                    >
                                        favorite
                                    </NavLink>
                                    : ''
                            }


                        </div>

                    </div>

                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <div className="navbar-nav">
                            <MangaSearch />

                            <span className='nav-item nav-link  text-primary '>
                            
                                
                                {auth?.displayName}
                            </span>
                            {
                                auth.status === "not-authenticated"
                                    ? <NavLink
                                        className="nav-item nav-link"
                                        to="auth/login"
                                    >
                                        LogIn/Register
                                    </NavLink>

                                    : <span

                                        className="nav-item  nav-link "
                                        onClick={onLogout}
                                    >
                                        LogOut

                                    </span>
                            }
                            

                        </div>

                    </div>
                </div>
            </nav>





        </>
    )
}