import axios from 'axios';
import cookies from '../../libs/CookiesApp';

const axiosStocks = axios.create({baseURL:'http://127.0.0.1:8000'});

export function getPortfolio() {
    
    cookies.get('Token');
    const config = {
        headers: {
            Authorization: "Token " + cookies.get("Token")
        }
    }
    return axiosStocks.get('/api/stocks/portfolio/', config).then(res => res.data);
}