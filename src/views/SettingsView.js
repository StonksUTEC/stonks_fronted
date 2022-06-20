import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'

const SettingsView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>SettingsView</h2>
        </div>
    </div>
  )
}

export default SettingsView