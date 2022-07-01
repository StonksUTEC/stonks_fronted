import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import HeaderView from './Headerview'
import Home from "./img/h.png";

// API
import { getUsername, isAuthenticated} from '../connections/userAPI';

const HomeView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
        <HeaderView/>

            <center>
            <img
              alt="home"
              style={{ width: "60%" }}
              src={Home}
            ></img>
            </center>
        </div>
    </div>
  )
}

export default HomeView