import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import StocksComponent from '../components/Stocks/StocksComponent'
import HeaderView from './Headerview'

const PortfolioView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
        <HeaderView/>

            <h2>My Portfolio</h2>
            <StocksComponent/>
        </div>
    </div>
  )
}

export default PortfolioView