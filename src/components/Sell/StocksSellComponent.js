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
import { Button } from '@mui/material';
import StockSellModal from './StockSellModal';
function StocksSellData() {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data =await getStocks();
            setStocks(data);
        }
        fetchData();
    }, [])
    const [sellStock, setSellStock] = useState([]);
    return (
        <Fragment>
            {
                stocks.map((stock) => (
                    <TableRow
                        key={stock.company_ruc}
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
                            <StockSellModal stockValue={stock} sx={{textAlign: 'center'}}>Sell</StockSellModal>
                        </TableCell>
                    </TableRow>
                ))
            }
        </Fragment>
    )
}

export default function StocksSellComponent() {
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
                    <StocksSellData/>
                </TableBody>
            </Table>
        </TableContainer>
    );
}