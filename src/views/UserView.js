import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import styled from '@emotion/styled'
import Stonks from "./img/s.jpg";
import { Avatar } from '@mui/material';
import UserData from './components/UserData'
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
import Stonkss from "./img/s.png";
import Logo from "./img/logo.png";
import HeaderView from './Headerview'
import StyledBadge from '@mui/material/Badge';
// API
import { getUsername, isAuthenticated} from '../connections/userAPI';
import { SERVER_HOST } from '../libs/ServerConnection';
const St = styled.div`
  width: 80%;
  text-align : center;
  margin-left: 4em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const IBlock =styled.div`
  grid-gap: 20px;

  align-items: center;
  margin-left:-2em;
  
`;
const ImgBlock =styled.div`
  font-weight: bold;
  font-family:roboto;
  font-size:40px;
  align-items: center;
  width: 230px;
  height: 230px;

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
    axios.get(SERVER_HOST  + '/api/auth/user/',config)
    .then(response => {  
      let json = response.data;
      const currentuserdata = json;
      getUserData(currentuserdata);
    }).catch(error => {
      console.log(error);
    });
  }
  return (
    <div className='dashboard-block'>
        <Sidebar>
        </Sidebar>
        <center><div className='dashboard-content' >
        <HeaderView/>
        <br></br>
           <St>
            <ImgBlock>
            <br></br>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot">
            <center><Avatar alt="s" src={Stonks} sx={{ width: 220, height: 220} }/></center>
            </StyledBadge>
            

            </ImgBlock>
            <IBlock>
            <UserData userdata={userdata}/>
            </IBlock>
            </St>
            <br></br>
        
        </div></center>
    </div>
  )
}

export default HomeView