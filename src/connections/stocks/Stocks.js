import axios from 'axios';
const axiosStocks = axios.create({baseURL:'http://localhost:3001'});

export const getStocks = () => {
    return axiosStocks.get('/api/stocks').then(res => res.data);
}