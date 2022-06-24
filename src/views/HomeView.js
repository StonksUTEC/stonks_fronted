import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SideBar/Sidebar'
// import { useNavigate } from "react-router-dom";

// API
import { getUsername, isAuthenticated} from '../connections/userAPI';

const HomeView = () => {
  // const [loading, setLoading] = useState(false);
  // let navigate = useNavigate();
  // useEffect( () => {
  //   async function fetchToken() {
  //     const token = await isAuthenticated();
  //     console.log(token);
  //     if (!token) {
  //       return navigate('/signin');
  //     }
  //   }
  //   fetchToken();
  // }, setTimeout(() => 5000));
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>Welcome {getUsername()}</h2>
        </div>
    </div>
  )
}

export default HomeView