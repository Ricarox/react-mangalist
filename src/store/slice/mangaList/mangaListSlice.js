import { createSlice } from '@reduxjs/toolkit';

export const mangaListSlice = createSlice({
    name: 'mangaList',
    initialState: {
        page: 1,
        mangas: [],
        isLoading: false,
        mangaSelect: {},
    },
    reducers: {
        startLoadingMangas: (state, /* action */) => {
            state.isLoading = true;
        },
        setMangas: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.mangas = action.payload.mangas;
        
        },
        setMangasAll: (state, action) => {
            state.isLoading = false;
            state.mangas = action.payload.mangas;
            
        },
        setMangaSelect: (state, action) => {
            state.isLoading = false;
            state.mangaSelect = action.payload.mangaSelect;
            
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingMangas, setMangas, setMangasAll, setMangaSelect } = mangaListSlice.actions;