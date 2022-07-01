import cookies from "../libs/CookiesApp";
import { axiosToken } from '../connections/tokenAPI';
export function signin() {
    axiosToken.get('/api/token')
        .then(res => {
            cookies.set("Token", res.data.token, { path: '/' })
        });
    let isToken = 0;

    if (cookies.get('Token')) {
        isToken = 1;
    };
    return isToken;
}