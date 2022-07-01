import axios from 'axios';
import cookies from '../../libs/CookiesApp';

const axiosOrders = axios.create({baseURL:'http://localhost:8000'});

export function getOrders(){
    const headers = { 
        'headers': { Authorization: "Token " + cookies.get("Token") }}
    return axiosOrders.get('/api/stocks/orders/', headers).then(res => res.data);
};

export const getCompletedOrders = () => {
    const headers = { 
        'headers': { Authorization: "Token " + cookies.get("Token") }}
    return axiosOrders.get('/api/stocks/user-completed-orders/', headers).then(res => res.data);
};


