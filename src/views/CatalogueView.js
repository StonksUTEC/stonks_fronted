import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'

const CatalogueView = () => {
  return (
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
            <h2>Catalogue</h2>
        </div>
    </div>
  )
}

export default CatalogueView