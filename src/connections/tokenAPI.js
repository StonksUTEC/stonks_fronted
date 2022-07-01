import axios from 'axios';
import { SERVER_HOST } from '../libs/ServerConnection';

export const axiosToken = axios.create(
    {
        baseURL: SERVER_HOST
    }
);

axiosToken.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};
// axiosToken.defaults.timeout=2000;

export function getToken() {
    return axiosToken.get('/api/token').then(response => response.data.token);
}

export function postToken(payload) {
    return axiosToken.post('/', payload).then(response => response);
}
