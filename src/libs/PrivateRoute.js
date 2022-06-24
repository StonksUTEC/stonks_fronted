import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import {existsToken} from '../connections/TokenConnection'
const PrivateRoute = ({ children }) => {
    // axiosToken.get('/api/token')
    //     .then(res => {console.log(res.data); cookies.set("Token", res.data.token, { path: '/' }) });
    // console.log('Now token is', cookies.get('Token'));
    // let isToken = 0;
    // if (cookies.get('Token')) {
    //     isToken = 1;
    // };
    let isToken = existsToken();
    return isToken ? children : <Navigate to="/signin" />;
}

export default PrivateRoute