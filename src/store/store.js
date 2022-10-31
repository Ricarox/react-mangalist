import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from './slice/auth/authSlice'
import { mangaListSlice } from './slice/mangaList/mangaListSlice'




export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        mangaList: mangaListSlice.reducer,

    }

    

  })

 