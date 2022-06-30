import axios from 'axios';
const axiosStocks = axios.create({baseURL:'https://djangoappstonks.azurewebsites.net'});

export const getStocks = () => {
    return axiosStocks.get('/api/stocks/companies/').then(res => res.data);
}