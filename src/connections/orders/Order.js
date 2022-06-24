import axios from 'axios';

const axiosOrders = axios.create({baseURL:'http://localhost:3001'});

export const getOrders = () => {
    return axiosOrders('api/orders').then(res => res.data);
};

export const getCompletedOrders = () => {
    // api/orders/completed
};


