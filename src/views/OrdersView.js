import React from 'react'
import OrdersStates from '../components/Orders/OrdersStates'
import Sidebar from '../components/SideBar/Sidebar'
import HeaderView from './Headerview'

const OrdersView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar/>
        <div class="order-content">
        <HeaderView/>

        <h2>My orders</h2>
        <OrdersStates/>
        </div>
    </div>
  )
}

export default OrdersView