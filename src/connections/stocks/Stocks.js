import axios from 'axios';
const axiosStocks = axios.create({baseURL:'http://127.0.0.1:8000'});

export const getStocks = () => {
    return axiosStocks.get('/api/stocks/companies/').then(res => res.data);
}