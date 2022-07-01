import React from 'react'
import StocksSellComponent from '../components/Sell/StocksSellComponent'
import Sidebar from '../components/SideBar/Sidebar'
import HeaderView from './Headerview'

const SellView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
        <HeaderView/>

            <h2>Sell</h2>
            <StocksSellComponent/>
        </div>
    </div>
  )
}


export default SellView