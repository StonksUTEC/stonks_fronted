import React from 'react'
import StocksSellComponent from '../components/Sell/StocksSellComponent'
import Sidebar from '../components/SideBar/Sidebar'

const SellView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>SellView</h2>
            <StocksSellComponent/>
        </div>
    </div>
  )
}


export default SellView