import styled from '@emotion/styled'
// import Cookies from 'universal-cookie';
// import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
// import { SERVER_HOST } from '../../libs/ServerConnection';

const InternalBlock = styled.div`
  margin-top: 1em;
  height: max-content;

`;

const Label = styled.label`
  align-items: center;
  margin-right: 0em;
  margin-top: 0.75em;
  display: block;
  color:block;
  text-align: left;
  font-size:20px;
  font-weight: bold;
  font-family:roboto;

`;

// const axios = require('axios');

export default function UserData(props) {
       const displayUserData = (props) => {
        const user = props.userdata;
        return (
          
              <InternalBlock>
                <Label>Account Information</Label>
                <br></br>

                <Label>DNI: {user.dni}</Label>
                <br></br>

                <Label>Names: {user.names}</Label>
                  <br></br>
                <Label>Lastname: {user.lastname}</Label>
                  <br></br>
                <Label>Email: {user.email}</Label>
                <br></br>
                <Label>Money: {user.money}</Label>
              </InternalBlock>  
          )
    }
    return (
        <>
          {displayUserData(props)}
        </>
      )
  }
