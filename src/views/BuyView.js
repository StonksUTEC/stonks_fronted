import React from 'react'
import StocksBuyComponent from '../components/Buy/StocksBuyComponent'
import Sidebar from '../components/SideBar/Sidebar'
import "./general.css"
import HeaderView from './Headerview'

const BuyView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
        <HeaderView/>
            <h2>Market</h2>
            <StocksBuyComponent/>
        </div>
    </div>
  )
}

export default BuyView