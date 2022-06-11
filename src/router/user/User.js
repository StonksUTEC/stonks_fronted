import styled from '@emotion/styled'
import React from 'react'
import { Button } from '@mui/material';

const UserWrapper = styled.div`
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
const Title = styled.div`
  margin: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
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
const RightSide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.7fr;
  color: white;
`;
const UserdataWrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const OrderBlock = styled.div`
  background-color: black;
  width: 100vh;
  height: 80vh;
  text-align: center;
  color: white;
  border: 1px solid white;
`;
const OrderBlockTitle = styled.h3`
  color: white;
  font-family: 'Roboto';
  margin: 30px;
`;
const InternalBlock = styled.div`
  margin-top: 2em;
  background-color: black;
  height: max-content;
`;
const Label = styled.label`
  display: block;
  color:white;
`;
  const Userdata = () => {
    return (
      <UserdataWrapper>
      <OrderBlock>
        <OrderBlockTitle>
          User #7218
        </OrderBlockTitle>
        <InternalBlock>
          <Label>Company RUC:</Label>
          <Label>Quantity:</Label>
          <Label>Price:</Label>
          <Label>Transaction type:</Label>
          <br />
          <br />
          <Button id={'Logout-button'} type={"submit"} color='secondary' variant="contained">Logout</Button>
          <br />
          <br />
          <Button id={'LogoutAll-button'} type={"submit"} color='secondary' variant="contained">Logout All</Button>
          <br />
          <br />
          <Button id={'Update-button'} type={"submit"} color='secondary' variant="contained">Update</Button>

        </InternalBlock>
      </OrderBlock>   
    </UserdataWrapper>
    )
  }
  const User = () => {
  return (
    <UserWrapper>
      <LeftSide>
        <Title>STONKS</Title>
        <Sections>
          <SectionItem>Portfolio</SectionItem>
          <SectionItem>Orders</SectionItem>
          <SectionItem>Notifications</SectionItem>
        </Sections>
      </LeftSide>
      <RightSide>
        <Userdata>
        </Userdata>
      </RightSide>
    </UserWrapper>
  )
}
export default User;