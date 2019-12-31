import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://test.adopets.app/v1/',
});
