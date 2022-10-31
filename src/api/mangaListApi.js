import axios from 'axios';

export const mangaListApi = axios.create({
    
    baseURL: 'https://api.jikan.moe/v4',

});

