import axios from 'axios';
import { SERVER_HOST } from '../../libs/ServerConnection';
const axiosStocks = axios.create({baseURL:SERVER_HOST});

export const getStocks = () => {
    return axiosStocks.get('/api/stocks/companies/').then(res => res.data);
}