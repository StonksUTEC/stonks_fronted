import axios from 'axios';
import cookies from '../../libs/CookiesApp';

const axiosSignin = axios.create({baseURL:'http://127.0.0.1:8000'});

export function SignInPost(dni, password) {
    console.log(`Is sending ${dni} ${password}`);
    axiosSignin.post('/api/auth/login/', {"username": dni, "password": password}).then((response) => {
        console.log('Token is ', response.data.token);
        cookies.set('Token', response.data.token);
        window.location.replace('/home');
    }, (error) => {
        console.log(error);
        cookies.set('Token', '');
        window.location.replace('/signin');
      });
}