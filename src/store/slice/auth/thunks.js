
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../firebase/config';
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../../firebase/providers';

import { loadMangasFavorites } from '../../../helpers/loadMangasFavorites';
import { addNewFavoriteManga, checkingCredentials, deleteFavoriteById, lastViewUpdate, login, logout, savingNewFavoriteManga, setFavoritesMangas, setMangaFavoriteSelect } from './authSlice';



export const checkingAuthenticatiod = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}

export const startGoogleSignIn = () => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( logloginin( result ))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

       const { ok, uid, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
       
       if (!ok) return dispatch( logout({ errorMessage }) )
        
       dispatch( login({ uid, displayName, email }));

        
    }
}

export const startLoginWithEmailPassword = ({ email, password } ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

       const { ok, uid, errorMessage, displayName } = await loginWithEmailPassword({ email, password });
       
       if (!ok) return dispatch( logout({ errorMessage }) )
        
       dispatch( login({ uid, displayName }));

    }
}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();
        dispatch( logout() )

    }
}

export const startLoadingFavoritesMangas = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!uid) throw new Error('The uId user not exist');

        const favorites = await loadMangasFavorites(uid);
        // console.log(favorites);


        dispatch(setFavoritesMangas(favorites))


    }
}

export const startNewMangaFavorite = (manga) => {
    return async (dispatch, getState) => {

        dispatch(savingNewFavoriteManga())
    

        const { uid } = getState().auth;
  


        const newMangaFavorite = {

            cId: manga.mal_id,
            title: manga.title,
            synopsis: manga.synopsis,
            chapters: manga?.chapters,
            lastView: 0,
            img: manga.images.jpg.large_image_url,

        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/Favorite/manga`));
        await setDoc(newDoc, newMangaFavorite);

        newMangaFavorite.id = newDoc.id;

        dispatch(addNewFavoriteManga(newMangaFavorite));


    }
}

export const getMangaFavorite = (idFavorite) => {

    return async (dispatch, getState) => {

        dispatch(savingNewFavoriteManga());

        const { uid } = getState().auth;

       
        const favorites = await loadMangasFavorites(uid);

        const mangaFavoriteSelect = favorites.find(favorite => favorite.cId === idFavorite);


        dispatch(setMangaFavoriteSelect({ mangaFavoriteSelect }));

    }

}

export const startLastView = (last) => {
    return async (dispatch, getState) => {

        dispatch(savingNewFavoriteManga());

        const { uid, mangaFavoriteSelect } = getState().auth;

        const favoriteToFireStore = { ...mangaFavoriteSelect, lastView: last };
        delete favoriteToFireStore.id;
      
        const docRef = doc(FirebaseDB, `${uid}/Favorite/manga/${mangaFavoriteSelect.id}`);
        await setDoc(docRef, favoriteToFireStore, { merge: true });
        
        dispatch(lastViewUpdate(mangaFavoriteSelect))
        

    }
}

export const StartDeletingFavorite = () => {
    return async (dispatch, getState) => {

        const { uid, mangaFavoriteSelect } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/Favorite/manga/${mangaFavoriteSelect.id}`);
       
        await deleteDoc(docRef);

        dispatch(deleteFavoriteById(mangaFavoriteSelect.id));

    }
}