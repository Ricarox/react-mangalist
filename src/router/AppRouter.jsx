import { Navigate, Route, Routes } from "react-router-dom"


import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { Navbar } from "../ui/components/Navbar"
import { FavoritePage, MangaPage, MangasListPage, SearchPage } from "../mangas/pages"




export const AppRouter = () => {


    const { status } = useCheckAuth()



    return (

        <>
            <Navbar />
            <div className="container-fluid">
                <Routes>
                    {
                        (status !== 'authenticated')
                       
                        &&
                        <Route path="/auth/*" element={<AuthRoutes />} />
                        || 
                        < Route path="favorite" element={<FavoritePage />} />
                    }

                    


                    <Route path="mangalist" element={<MangasListPage />} />
                    <Route path="manga/:id" element={<MangaPage />} />
                    <Route path="search" element={<SearchPage />} />




                    <Route path="/*" element={<Navigate to="/mangalist" />} />
                </Routes>
            </div>
        </>


    )
}
