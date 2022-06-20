import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'

const HomeView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>HomeView</h2>
        </div>
    </div>
  )
}

export default HomeView