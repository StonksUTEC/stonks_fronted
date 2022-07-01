import React from 'react'
import { Navigate } from 'react-router-dom';
import {existsToken} from '../connections/TokenConnection'
const PrivateRoute = ({ children }) => {
    let isToken = existsToken();
    return isToken ? children : <Navigate to="/signin" />;
}

export default PrivateRoute