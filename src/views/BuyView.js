import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import "./general.css"
const BuyView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>Buy</h2>
        </div>
    </div>
  )
}

export default BuyView