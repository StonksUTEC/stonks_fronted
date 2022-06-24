import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'

// API
import { getUsername, isAuthenticated} from '../connections/userAPI';

const HomeView = () => {
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