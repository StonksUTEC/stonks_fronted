import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import SettingSide from '../components/Settings/SettingsComponent.js'
import HeaderView from './Headerview'

const SettingsView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <HeaderView/>
            <h2>Settings</h2>
            <SettingSide/>
        </div>
    </div>
  )
}

export default SettingsView