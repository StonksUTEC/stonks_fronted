import axios from 'axios';

export const axiosToken = axios.create(
    {
        baseURL: 'http://127.0.0.1:8000'
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
