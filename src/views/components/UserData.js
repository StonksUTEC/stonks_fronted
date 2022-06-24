import styled from '@emotion/styled'
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';


const InternalBlock = styled.div`
  margin-top: 1em;
  height: max-content;

`;

const Label = styled.label`
  margin-top: 0.75em;
  display: block;
  color:block;
  text-align: left;
  font-size:20px;
  font-weight: bold;

`;

const axios = require('axios');

export default function UserData(props) {
    const navigate = useNavigate();
    const logoutRequest = () => {
      const cookies = new Cookies();
      const config = {
        headers: {  
          Authorization: "Token " + cookies.get("Token")
        }
      }
      axios.post('http://localhost:8000/api/auth/logout/', {},config)
      .then(response => {  
        let json = response.data;
        console.log(json);
        console.log("SUCCESSFUL LOGOUT");
        navigate('/');
      }).catch(error => {
        console.log(error);
      });
    }

    const logoutAllRequest = () => {
      const cookies = new Cookies();
      const config = {
        headers: {  
          Authorization: "Token " + cookies.get("Token")
        }
      }
      axios.post('http://localhost:8000/api/auth/logoutall/', {},config)
      .then(response => {  
        let json = response.data;
        console.log(json);
        console.log("SUCCESSFUL LOGOUT ALL");
        navigate('/');
      }).catch(error => {
        console.log(error);
      });
    }

    const displayUserData = (props) => {
        const user = props.userdata;
        console.log(user)
        return (
              
              <InternalBlock>
                <Label>DATES</Label>
                <Label>DNI: {user.dni}</Label>
                <Label>Names: {user.names}</Label>
                <Label>Lastname: {user.lastname}</Label>
                <Label>Email: {user.email}</Label>
                                
              </InternalBlock>  
          )
    }
    return (
        <>
          {displayUserData(props)}
        </>
      )
  }