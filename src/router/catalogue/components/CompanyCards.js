import React from 'react'
import styled from '@emotion/styled'
import {useNavigate} from 'react-router-dom';

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

export default function CompanyCards(props) {
  const navigate = useNavigate();

  const sellButton = e => {
    const companyRuc = e.target.value;
    navigate("/order?method=sell&company="+companyRuc)
  }
  const buyButton = e => {
    const companyRuc = e.target.value;
    navigate("/order?method=buy&company="+companyRuc)
  }

  const displayCompanies = (props) => {
    const {menu, companies} = props;
    if (companies.length > 0) {
      return(
        companies.map((company, index) => {
          console.log(company);
          return(
            <StockRow>
            <StockItem>
              {company.ruc}
            </StockItem>
            <StockItem>
              {company.company_name}
            </StockItem>
            <StockItem>
              {company.acronym}
            </StockItem>
            <StockItem>
              {company.lastest_price}
            </StockItem>
            <StockSellWrapper>
              <StockSellButton value={company.ruc} onClick={sellButton} type='number'>
                  Sell
              </StockSellButton>
              <StockSellButton value={company.ruc} onClick={buyButton} type='number'>
                   Buy
              </StockSellButton>
            </StockSellWrapper>
          </StockRow>
          )
        })
      )
    }
    else {
      return <StockRow>
        <h3>No companies</h3>
      </StockRow>
    }
  }

  return (
    <>
      {displayCompanies(props)}
    </>
  )
}

