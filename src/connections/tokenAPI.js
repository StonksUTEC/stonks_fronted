import axios from 'axios';

export const axiosToken = axios.create(
    {
        baseURL: 'https://174d1cfd-b2b2-4d83-a1bf-efbe3b259787.mock.pstmn.io'
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
