import axios from 'axios';
import cookies from '../../libs/CookiesApp';

const axiosOrders = axios.create({baseURL:'https://djangoappstonks.azurewebsites.net'});

export function getOrders(){
    const headers = { 
        'headers': { Authorization: "Token " + cookies.get("Token") }}
    return axiosOrders.get('/api/stocks/orders/', headers).then(res => res.data);
};

export const getCompletedOrders = () => {
    // api/orders/completed
};


