import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import PortfolioCards from './components/PortfolioCards'

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
  margin: auto;
  align-items: center;
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

const axios = require('axios');

const Portfolio = () => {

  const [entries, getEntries] = useState('');

  useEffect( () => {
    getAllEntries();
  }, []);

  const getAllEntries = () => {
    const cookies = new Cookies();
    const config = {
      headers: {  
        Authorization: "Token " + cookies.get("Token")
      }
    }
    axios.get('http://localhost:8000/api/stocks/portfolio/',config)
    .then(response => {  
      let json = response.data;
      const allEntries = json;
      console.log(allEntries);
      getEntries(allEntries);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <BuyWrapper>
      <LeftSide>
        <Title>STONKS</Title>
        <Input></Input>
        <Sections>
          <SectionItem>Portfolio</SectionItem>
          <SectionItem>Orders</SectionItem>
          <SectionItem>Notifications</SectionItem>
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
              Quantity
            </StockTileItem>
          </StockIitle>
          <PortfolioCards entries={entries}/>
        </StockWrapper>
      </RightSide>
    </BuyWrapper>
  )
}

export default Portfolio