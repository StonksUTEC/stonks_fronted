import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import CompanyCards from './components/CompanyCards'
import Logo from "../img/logo.png";
import Stonks from "../img/s.png";
import { Link } from "react-router-dom";

const BuyWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  color: black;
`;
const LeftSide = styled.div`
background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
  font-family: 'Jura';
  /* Add shadow */
 
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
  margin: auto;
  align-items: center;
`;


const Sections = styled.div`
  margin-top: 6em;
`;

const SectionItem = styled.div`
  margin: 20px;
  color: white;
  font-family: 'Jura';
  font-weight: 600;
  font-size: 25px;
`;

const Title = styled.div`
  margin: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 0 10px;
  /* margin: 4px 10px 0px 10px; */
  margin-top: 5px;
  margin-bottom: 4px;
  margin-left: 10%;
  height: 30px;
  width: 14em;
  outline: none;
  border-width: 2px;
  &:hover, &:active, &:focus, &::after{
    outline: none;
  }
`;
const St = styled.div`
  text-align : center;

`;
const Log = styled.div`
  text-align : center;
`;

const axios = require('axios');

const Catalogue = () => {

  const [companies, getCompanies] = useState('');

  useEffect( () => {
    getAllCompanies();
  }, []);

  const getAllCompanies = () => {
    axios.get('http://localhost:8000/api/stocks/companies/')
    .then(response => {  
      let json = response.data;
      const allCompanies = json;
      console.log(allCompanies);
      getCompanies(allCompanies);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <BuyWrapper>
      <LeftSide>
      <St>
          <img src={Stonks} alt="s" width={70} />
        </St>
        <Log>
          <img src={Logo} alt="logo" width={100} />
        </Log>
        <Input></Input>
        <Sections>
        <Link style={{ 'textDecoration': 'none' }} to="/user">
        <SectionItem>Profile</SectionItem>
        </Link>
        <Link style={{ 'textDecoration': 'none' }} to="/portfolio">
          <SectionItem>Portfolio</SectionItem>
          </Link>
        <Link style={{ 'textDecoration': 'none' }} to="/catalogue">
          <SectionItem>Companies</SectionItem>
          </Link>
          <Link style={{ 'textDecoration': 'none' }} to="/order">
          <SectionItem>Order</SectionItem>
          </Link>
        </Sections>
      </LeftSide>
      <RightSide>
        <StockWrapper>
          <StockIitle>
            <StockTileItem>
              RUC
            </StockTileItem>
            <StockTileItem>
              Name
            </StockTileItem>
            <StockTileItem>
              Symbol
            </StockTileItem>
            <StockTileItem>
              Stock Price
            </StockTileItem>
            <StockTileItem>
              Order
            </StockTileItem>
          </StockIitle>
          <CompanyCards companies={companies}/>
        </StockWrapper>
      </RightSide>
    </BuyWrapper>
  )
}

export default Catalogue