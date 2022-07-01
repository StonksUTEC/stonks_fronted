import axios from 'axios';
import cookies from '../../libs/CookiesApp';
import { SERVER_HOST } from '../../libs/ServerConnection';

const axiosStocks = axios.create({baseURL:SERVER_HOST});

export function getPortfolio() {
    
    cookies.get('Token');
    const config = {
        headers: {
            Authorization: "Token " + cookies.get("Token")
        }
    }
    return axiosStocks.get('/api/stocks/portfolio/', config).then(res => res.data);
}