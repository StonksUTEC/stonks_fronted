import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import StocksComponent from '../components/Stocks/StocksComponent'

const PortfolioView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>Portfolio</h2>
            <StocksComponent/>
        </div>
    </div>
  )
}

export default PortfolioView