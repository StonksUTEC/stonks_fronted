import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./stocks.css"
import { getStocks } from '../../connections/stocks/Stocks';
import { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import StockBuyModal from './StockBuyModal';

// Style of modal
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

// General function to get data
function StocksBuyData() {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data =await getStocks();
            setStocks(data);
        }
        fetchData();
    }, [])
    return (
        <Fragment>
            {
                stocks.map((stock) => (
                    <TableRow
                        key={stock.ruc}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" align="center">
                            {stock.ruc}
                        </TableCell>
                        <TableCell align="center">{stock.company_name}</TableCell>
                        <TableCell align="center">{stock.acronym}</TableCell>
                        <TableCell align="center">{stock.lastest_price}</TableCell>
                        {/* <TableCell align="center">{stock.quantity}</TableCell> */}
                        <TableCell align="center">
                            <StockBuyModal stock={stock} sx={{textAlign: 'center'}}>New</StockBuyModal>
                        </TableCell>
                    </TableRow>
                ))
            }
        </Fragment>
    )
}

// Componenet of Stock table
export default function StocksBuyComponent() {
    return (
        <TableContainer component={Paper} sx ={{width: '80%', marginLeft: '10%'}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">RUC</TableCell>
                        <TableCell align="center">Company</TableCell>
                        <TableCell align="center">Acronym</TableCell>
                        <TableCell align="center">Latest price</TableCell>
                        {/* <TableCell align="center">Quantity</TableCell> */}
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StocksBuyData/>
                </TableBody>
            </Table>
        </TableContainer>
    );
}