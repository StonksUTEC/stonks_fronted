import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import styled from '@emotion/styled'
import Stonks from "./img/s.jpg";
import { Avatar } from '@mui/material';
import UserData from './components/UserData'
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
// API
import { getUsername, isAuthenticated} from '../connections/userAPI';
const St = styled.div`
  text-align : center;
  margin-left: 4em;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
const Block =styled.div`
  align-items: center;
  margin-top: 2em;
  margin-left: 4em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
const IBlock =styled.div`
  
  grid-gap: 10px;
  width: 48vw;
  height: 10vw;
`;

const Co =styled.div`
font-weight: bold;
  align-items: center;
  width:100%;
  height: 4em;
  border:solid;
  text-align : center;
  margin-top: 2em;
  display: grid;
  font-size: 20px;
  color: green;
`;
const Co2 =styled.div`
font-weight: bold;
  align-items: center;
  width:100%;
  height: 6em;
  text-align : center;
  margin-top: 2em;
  display: grid;
  font-size: 20px;
  color: green;
`;
const axios = require('axios');

const HomeView = () => {
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
    <div className='dashboard-block'>
        <Sidebar></Sidebar>
        <div className='dashboard-content'>
        <h2>Welcome {getUsername()}</h2>
            <St>
            <Avatar alt="s" src={Stonks} sx={{ width: 180, height: 180} }/>
            <IBlock>
            <UserData userdata={userdata}/>
            </IBlock>
            </St>
            <br></br>
            <Block>
              <Co>
              Account Value: $100,000.00 
              </Co> 
            
            <br></br>
            
            </Block>
        </div>
    </div>
  )
}

export default HomeView