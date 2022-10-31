import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking' 'not-authenticated, 'authenticated'
        isSaving: false,
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null,
        favorites: [],
        mangaFavoriteSelect: {},

    },
    reducers: {

        savingNewFavoriteManga: (state) => {

            state.isSaving = true;

        },

        login: (state, { payload }) => {

            state.status = 'authenticated'; 
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.errorMessage = null;
            state.favorites;
            state.mangaFavoriteSelect;

        },

        logout: (state, { payload }) => {

            state.status = 'not-authenticated'; 
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage;
            state.favorites = [];
            state.mangaFavoriteSelect={};

        },

        checkingCredentials: (state) => {

            state.status = 'checking';

        },

        addNewFavoriteManga: (state, action) => {

            state.favorites.push(action.payload);

            state.isSaving = false;

        },
        setFavoritesMangas: (state, action) => {
            
            state.favorites = action.payload;    


        },
        setMangaFavoriteSelect: (state, action) => {

            state.isSaving = false;
            state.mangaFavoriteSelect = action.payload.mangaFavoriteSelect;
            
        },
        lastViewUpdate: (state, action) => {
            state.isSaving = false;
          
           
            state.favorites = state.favorites.map(favorite => {
                

                if (favorite.id === action.payload.id) {

                    return action.payload;

                }

                return favorite;
            });

        },

        deleteFavoriteById: (state, action) => {
            state.mangaFavoriteSelect = {};
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);


        },

    }
});


// Action creators are generated for each case reducer function
export const {
    login,
    logout,
    checkingCredentials,


    //Favorites
    addNewFavoriteManga,
    savingNewFavoriteManga,
    setFavoritesMangas,
    setMangaFavoriteSelect,
    lastViewUpdate,
    deleteFavoriteById
    

} = authSlice.actions;