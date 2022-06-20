import React from 'react'
import OrdersStates from '../components/Orders/OrdersStates'
import Sidebar from '../components/SideBar/Sidebar'

const OrdersView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar/>
        <div class="order-content">
        <h2>My orders</h2>
        <OrdersStates/>
        </div>
    </div>
  )
}

export default OrdersView