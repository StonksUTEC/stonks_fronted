import React from 'react'
import styled from '@emotion/styled'

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
  margin-left: 5%;
  margin-right: 5%;
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

const StockSellWrapper = styled.div`
  background-color: black;
  display: flex;
`;

export default function PortfolioCards(props) {

  const displayEntries = (props) => {
    const {menu, entries} = props;
    if (entries.length > 0) {
      return(
        entries.map((entry, index) => {
          console.log(entry);
          return(
            <StockRow>
            <StockItem>
              {entry.company_ruc.ruc}
            </StockItem>
            <StockItem>
              {entry.company_ruc.company_name}
            </StockItem>
            <StockItem>
              {entry.company_ruc.acronym}
            </StockItem>
            <StockItem>
              {entry.company_ruc.lastest_price}
            </StockItem>
            <StockItem>
              {entry.quantity}
            </StockItem>
          </StockRow>
          )
        })
      )
    }
    else {
      return <StockRow>
        <h3>No entries</h3>
      </StockRow>
    }
  }

  return (
    <>
      {displayEntries(props)}
    </>
  )
}

