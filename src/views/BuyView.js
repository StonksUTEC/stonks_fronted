import React from 'react'
import StocksBuyComponent from '../components/Buy/StocksBuyComponent'
import Sidebar from '../components/SideBar/Sidebar'
import StocksComponent from '../components/Stocks/StocksComponent'
import "./general.css"
const BuyView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>Buy</h2>
            <StocksBuyComponent/>
        </div>
    </div>
  )
}

export default BuyView