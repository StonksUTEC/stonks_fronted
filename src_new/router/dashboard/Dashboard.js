import styled from '@emotion/styled'
import React from 'react'
import Logo from "../img/logo.png";
import Stonks from "../img/s.png";
const DashboardWrapper = styled.div`
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
`;
const St = styled.div`
  text-align : center;
`;
const Log = styled.div`
  text-align : center;
`;
const Title = styled.div`
  margin: 10px;
  
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

const StockBehavior = styled.div`
  background-color: black;
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
  height: 3em;
  align-items: center;
`;

const StockItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
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

const RightSide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.7fr;
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

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <LeftSide>
       
        <St>
          <img src={Stonks} alt="s" width={70} />
        </St>
        <Log>
          <img src={Logo} alt="logo" width={100} />
        </Log>
      
        
        <Input></Input>
        <Sections>
          <SectionItem>Portfolio</SectionItem>
          <SectionItem>Orders</SectionItem>
          <SectionItem>Notifications</SectionItem>
        </Sections>
      </LeftSide>
      <RightSide>
        <StockBehavior>
          Hello
        </StockBehavior>
        <StockWrapper>
          <StockIitle>
            <StockTileItem>
              Symbol
            </StockTileItem>
            <StockTileItem>
              Shares
            </StockTileItem>
            <StockTileItem>
              Value
            </StockTileItem>
            <StockTileItem>
              Today's return
            </StockTileItem>
            <StockTileItem>
              Return
            </StockTileItem>
            <StockTileItem>
              Return with sells
            </StockTileItem>
            <StockTileItem>
              Price/Share
            </StockTileItem>
            <StockTileItem>
            </StockTileItem>
            <StockTileItem>
            </StockTileItem>
            <StockTileItem>
            </StockTileItem>
            <StockTileItem>
            </StockTileItem>
          </StockIitle>
          {
            [1,2,3,4,5,6,7,8,9,10].map(i => {
              return (
                <StockRow>
                <StockItem>
                  UTEC
                </StockItem>
                <StockItem>
                  5
                </StockItem>
                <StockItem>
                  $191.00
                </StockItem>
                <StockItem style={{ 'color': '#7FE300' }}>
                  $4.95(+2.55)
                </StockItem>
                <StockItem style={{ 'color': '#7FE300' }}>
                  $4.95(+2.55)
                </StockItem>
                <StockItem style={{ 'color': '#7FE300' }}>
                  $2.45
                </StockItem>
                <StockItem style={{ 'color': '#7FE300' }}>
                  $12.50
                </StockItem>
                <StockSellWrapper>
                  <InputSell>
                  
                  </InputSell>
                  <StockSellButton type='number'>
                    Sell
                  </StockSellButton>
                </StockSellWrapper>
              </StockRow>
              )
            })
          }
        </StockWrapper>
      </RightSide>
    </DashboardWrapper>
  );
}

export default Dashboard