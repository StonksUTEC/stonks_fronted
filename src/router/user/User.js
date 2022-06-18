import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import UserData from './components/UserData'
import { Button } from '@mui/material';
import Logo from "../img/logo.png";
import Stonks from "../img/s.png";
import { Link } from "react-router-dom";

const St = styled.div`
  text-align : center;
`;
const Log = styled.div`
  text-align : center;
`;
const UserWrapper = styled.div`
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
  font-size: 25px;
  color: white;
`;
const RightSide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.7fr;
  color: white;
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
        <UserData userdata={userdata}/>
      </RightSide>
    </UserWrapper>
  )
}
export default User;