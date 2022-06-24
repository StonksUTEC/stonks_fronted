import React from 'react'
import { isAuthenticated } from '../connections/userAPI';
import { useNavigate } from "react-router-dom";
import HomeView from '../views/HomeView';
const LinkWithAuth = ({ link }) => {
  console.log(`Link with auth ${link}`);
    let navigate = useNavigate();
    async function fetchToken() {
        const token = await isAuthenticated();
        console.log(token);
        if (!token) {
          return navigate('/signin');
        } else {
            return <HomeView/>;
        }
      }
}

export default LinkWithAuth