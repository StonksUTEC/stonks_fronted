import { Button } from '@mui/material';
import React from 'react'
import "./orders.css";

export const OrderBoxCompleted = () => {
    return (
        <div className='order-box'>
            <div className='order-box-wrapper'>
                <div className='order-box-header'>
                    <p className='order-box-item'>SYMBOL</p>
                    <p className='order-box-item'>Quantity</p>
                    <p className='order-box-item'>Price</p>
                    <p className='order-box-item'>Type</p>
                </div>
                <div className='order-box-data'>
                    <p className='order-box-item'>UTEC</p>
                    <p className='order-box-item'>127</p>
                    <p className='order-box-item'>99.99</p>
                    <p className='order-box-item'>BM</p>
                </div>
            </div>
            <div className='order-box-completed-icon'>Completed</div>
        </div>
    );
}
export const OrderBoxCancel = () => {
    return (
        <div className='order-box'>
            <div className='order-box-wrapper'>
                <div className='order-box-header'>
                    <p className='order-box-item'>SYMBOL</p>
                    <p className='order-box-item'>Quantity</p>
                    <p className='order-box-item'>Price</p>
                    <p className='order-box-item'>Type</p>
                </div>
                <div className='order-box-data'>
                    <p className='order-box-item'>UTEC</p>
                    <p className='order-box-item'>127</p>
                    <p className='order-box-item'>99.99</p>
                    <p className='order-box-item'>BM</p>
                </div>
            </div>
            <Button style={{backgroundColor:'red', color:'white', marginRight: '20px'}}>Cancel</Button>
        </div>
    );
}

export const OrderBox = () => {
    return (
        <div className='order-box'>
            <div className='order-box-wrapper'>
                <div className='order-box-header'>
                    <p className='order-box-item'>SYMBOL</p>
                    <p className='order-box-item'>Quantity</p>
                    <p className='order-box-item'>Price</p>
                    <p className='order-box-item'>Type</p>
                </div>
                <div className='order-box-data'>
                    <p className='order-box-item'>UTEC</p>
                    <p className='order-box-item'>127</p>
                    <p className='order-box-item'>99.99</p>
                    <p className='order-box-item'>BM</p>
                </div>
            </div>

        </div>
    );
}

// export default OrderBox