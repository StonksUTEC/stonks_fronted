import styled from '@emotion/styled'
import React, { Fragment } from 'react'

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

const StockBehavior = styled.div`
  background-color: green;
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
  width: 4em;
  outline: none;
  border-width: 2px;
  &:hover, &:active, &:focus, &::after{
    outline: none;
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


const Dashboard = () => {
  return (
    <DashboardWrapper>
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
          </StockIitle>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
          <StockRow>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
            <StockItem>
              Lorem
            </StockItem>
          </StockRow>
        </StockWrapper>
      </RightSide>
    </DashboardWrapper>
  );
}

export default Dashboard