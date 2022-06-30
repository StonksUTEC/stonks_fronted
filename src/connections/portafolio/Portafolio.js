import axios from 'axios';
import cookies from '../../libs/CookiesApp';

const axiosStocks = axios.create({baseURL:'https://djangoappstonks.azurewebsites.net'});

export function getPortfolio() {
    
    cookies.get('Token');
    const config = {
        headers: {
            Authorization: "Token " + cookies.get("Token")
        }
    }
    return axiosStocks.get('/api/stocks/portfolio/', config).then(res => res.data);
}