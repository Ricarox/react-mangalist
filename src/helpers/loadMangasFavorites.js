import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';



export const loadMangasFavorites = async (uid) => {
    if (!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/Favorite/manga`);
    const docs = await getDocs(collectionRef);

    const favorites = [];

    docs.forEach(doc => {
        favorites.push({ id: doc.id, ...doc.data() });
    });


    return favorites;

}
