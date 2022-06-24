import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let jwt = 0;
    return jwt ? children : <Navigate to="/signin" />;
}

export default PrivateRoute