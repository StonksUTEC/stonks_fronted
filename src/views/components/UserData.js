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
    // const navigate = useNavigate();
    // const logoutRequest = () => {
    //   const cookies = new Cookies();
    //   const config = {
    //     headers: {  
    //       Authorization: "Token " + cookies.get("Token")
    //     }
    //   }
    //   axios.post(SERVER_HOST + '/api/auth/logout/', {},config)
    //   .then(response => {  
    //     let json = response.data;
    //     console.log(json);
    //     console.log("SUCCESSFUL LOGOUT");
    //     navigate('/');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }

    // const logoutAllRequest = () => {
    //   const cookies = new Cookies();
    //   const config = {
    //     headers: {  
    //       Authorization: "Token " + cookies.get("Token")
    //     }
    //   }
    //   axios.post(SERVER_HOST + '/api/auth/logoutall/', {},config)
    //   .then(response => {  
    //     let json = response.data;
    //     console.log(json);
    //     console.log("SUCCESSFUL LOGOUT ALL");
    //     navigate('/');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }

    const displayUserData = (props) => {
        const user = props.userdata;
        return (
          
              <InternalBlock>
                <Label>DNI:
                <br></br>
                <br></br>
                <TextField
                disabled
                id="outlined-disabled"
                label="DNI"
                defaultValue={user.dni}
                
                  />
                </Label>
               
                  <br></br>
                  <Label>Names:
                  <br></br>
                  <br></br>
                  <TextField
                disabled
                id="outlined-disabled"
                label="Names"
                defaultValue={user.names}
                  />
                  </Label>
                  <br></br>
                  <Label>Lastname:
                  <br></br>
                  <br></br>
                  <TextField
                disabled
                id="outlined-disabled"
                label="Lastname"
                defaultValue={user.lastname}
                  />
                  </Label>
                  <br></br>
                  <Label>Email:
                  <br></br>
                  <br></br>
                  <TextField
                disabled
                id="outlined-disabled"
                label="Email"
                defaultValue={user.email}
                  /></Label>
                  {/*
                  <Label>DNI: {user.dni}</Label>
                <Label>Names: {user.names}</Label>
                <Label>Lastname: {user.lastname}</Label>
                <Label>Email: {user.email}</Label>
                  */}
                
                                
              </InternalBlock>  
          )
    }
    return (
        <>
          {displayUserData(props)}
        </>
      )
  }