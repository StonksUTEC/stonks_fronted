import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import HeaderView from './Headerview'

const CatalogueView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
        <HeaderView/>

            <h2>Catalogue</h2>
        </div>
    </div>
  )
}

export default CatalogueView