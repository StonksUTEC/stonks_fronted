import axios from 'axios';
// import cookies from '../libs/CookiesApp';
import { SERVER_HOST } from '../libs/ServerConnection';
import { getToken } from './tokenAPI';

const axiosUsername = axios.create({baseURL:SERVER_HOST});
export async function isAuthenticated() {
    const token = await getToken();
    if (!token) return false;
    return true;
}

export async function getUsername() {
    return "Alexander"
    // const headers = { 
    //     'headers': { Authorization: "Token " + cookies.get("Token") }};
    // return axiosUsername.get('/api/auth/user/', headers).then(res => res.data.names);
}