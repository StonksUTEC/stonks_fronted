import styled from '@emotion/styled'
import { style } from '@mui/system';
import React from 'react'

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
  display: grid;
  background-color: black;
`;

const StockIitle = styled.div`
  color: white;
  font-family: 'Jura';
`;

const StockTileItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StockItem = styled.div`
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
              </StockTileItem>            
          </StockIitle>
        </StockWrapper>
      </RightSide>
    </DashboardWrapper>
  );
}

export default Dashboard