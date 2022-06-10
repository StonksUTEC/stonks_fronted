import styled from '@emotion/styled'
import { Button } from '@mui/material';
import React from 'react'
import Cookies from 'universal-cookie';

const BuyWrapper = styled.div`
    display: grid;
  grid-template-columns: 0.2fr 1fr;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  color: black;
`;
const LeftSide = styled.div`
  background-color: #DCFEC2;
  font-family: 'Jura';
  /* Add shadow */
  border-right: 8px solid #BCFE8B;
`;
const RightSide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.7fr;
  color: white;
`;

const StockWrapper = styled.div`
  background-color: black;
  width: 50em;
  margin-left: 7em;
  margin-right: 5em;
`;

const StockIitle = styled.div`
  color: white;
  font-family: 'Jura';
  display: flex;
  justify-content: space-around;
  height: 4em;
  align-items: center;
`;

const StockTileItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const StockRow = styled.div`
  color: white;
  font-family: 'Jura';
  display: flex;
  justify-content: space-around;
  height: 4em;
  align-items: center;
`;

const StockItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  width: 10em;
  font-size: small;
  text-align: center;
`;

const StockSellButton = styled.button`
  background-color: #DCFEC2;
  border: none;
  border-radius: 5px;
  padding: 10px 0 10px;
  margin-top: 5px;
  margin-bottom: 4px;
  margin-left: 10%;
  height: 30px;
  width: 6em;
  outline: none;
  font-weight: 700;
  border-width: 2px;
  &:hover, &:active, &:focus, &::after{
    outline: none;
    background-color: #ffff;
  }
`;

const Sections = styled.div`
  margin-top: 6em;
`;

const SectionItem = styled.div`
  margin: 20px;
  font-family: 'Jura';
  font-weight: 600;
  font-size: 20px;
`;

const StockSellWrapper = styled.div`
  background-color: black;
  display: flex;
`;

const InputSell = styled.input`
  text-align: center;
  border: 1px solid ;
  border-radius: 5px;
  padding: 10px 0 10px;
  margin-top: 5px;
  color: white;
  margin-bottom: 4px;
  margin-left: 10%;
  height: 30px;
  width: 4em;
  outline: none;
  background-color: #232323;
  border-width: 2px;
  &:hover, &:active, &:focus, &::after{
    outline: none;
  }
`;
const Title = styled.div`
  margin: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
`;

const Input = styled.input`
  border: 1px solid ;
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  padding-left: 20px;
  margin-bottom: 10px;
  height: 30px;
  width: 40vh;
  outline: none;
  background-color: #232323;
  border-width: 2px;
  &:hover, &:active, &:focus, &::after{
    outline: none;
    color: white;
  }
`;

const OrderWrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const OrderBlock = styled.div`
  background-color: black;
  width: 75vh;
  height: 70vh;
  text-align: center;
  color: white;
  border: 1px solid white;
`;

const OrderBlockForm = styled.div`
  font-family: 'Roboto',
  background-color: white;
`;

const OrderBlockTitle = styled.h3`
  color: white;
  font-family: 'Roboto';
  margin: 30px;
`;

const InternalBlock = styled.form`
  margin-top: 2em;
  background-color: black;
  height: max-content;
`;
const Label = styled.label`
  display: block;
  color:white;
`;

const axios = require('axios');


const OrderConfirmation = () => {
  const SubmitOrders = (event) => {
    event.preventDefault();
    const cookies = new Cookies();
    const ruc = document.getElementById('ruc').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const transaction = document.getElementById('transaction').value;
    const data = {
      'company_ruc': ruc, 'quantity': quantity, 'price': price,'transaction_type': transaction
    }
    const config = {
      headers: {
        post:{  
          Authorization: "Token " + cookies.get("Token")
        }
      }
    }
    console.log(config);
    axios.post('http://localhost:8000/api/stocks/new-order/', data, config)
      .then(response => {
        let json = response.data;
        console.log(json);
        console.log("Order Registered");
      }).catch(error => {
        console.log(error);
      });
  }

  return (
    <OrderWrapper>
      <OrderBlock>
        <OrderBlockTitle>
          New Order
        </OrderBlockTitle>
        <InternalBlock onSubmit={SubmitOrders}>
          <Input id="ruc" placeholder={'Company Ruc'}></Input>
          <Input id="quantity" placeholder={'Quantity'}></Input>
          <Input id="price" placeholder={'Price'}></Input>
          <Input id="transaction" placeholder={'Transaction type'}></Input>
          <br />
          <br />
          <Button  id={'submit-button'} type={"submit"} color='secondary' variant="contained">Order</Button>
        </InternalBlock>
      </OrderBlock>   
    </OrderWrapper>);
}

const Order = () => {
  return (
    <BuyWrapper>
      <LeftSide>
        <Title>STONKS</Title>
        <Sections>
          <SectionItem>Portfolio</SectionItem>
          <SectionItem>Orders</SectionItem>
          <SectionItem>Notifications</SectionItem>
        </Sections>
      </LeftSide>
      <RightSide>
        <OrderConfirmation>
        </OrderConfirmation>
      </RightSide>
    </BuyWrapper>
  )
}

export default Order;