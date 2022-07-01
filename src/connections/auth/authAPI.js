import axios from 'axios';
import cookies from '../../libs/CookiesApp';
import { SERVER_HOST } from '../../libs/ServerConnection';

const axiosSignin = axios.create({baseURL:SERVER_HOST});

export function SignInPost(dni, password) {
    axiosSignin.post('/api/auth/login/', {"username": dni, "password": password}).then((response) => {
        cookies.set('Token', response.data.token);
        window.location.replace('/home');
    }, (error) => {
        cookies.set('Token', '');
        alert('Can not sign in');
        window.location.replace('/signin');
      });
}

export function SignUpPost(dni, names, lastname, email, password) {
    const data = {"dni": dni, "names": names, "lastname": lastname, "email": email, "password": password}
    axiosSignin.post('/api/auth/register/',data ).then((response) => {
        cookies.set('Token', response.data.token);
        window.location.replace('/home');
    }, (error) => {
        cookies.set('Token', '');
        window.location.replace('/signup');
      });
}