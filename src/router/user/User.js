import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import UserData from './components/UserData'
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

const axios = require('axios');
  
const User = () => {
  const [userdata, getUserData] = useState('');
  useEffect( () => {
    getCurrentUserData();
  }, []);

  const getCurrentUserData = () => {
    const cookies = new Cookies();
    const config = {
      headers: {  
        Authorization: "Token " + cookies.get("Token")
      }
    }
    axios.get('http://localhost:8000/api/auth/user/',config)
    .then(response => {  
      let json = response.data;
      const currentuserdata = json;
      console.log(currentuserdata);
      getUserData(currentuserdata);
    }).catch(error => {
      console.log(error);
    });
  }
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
        <UserData userdata={userdata}/>
      </RightSide>
    </UserWrapper>
  )
}
export default User;