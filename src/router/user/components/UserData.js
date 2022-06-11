import styled from '@emotion/styled'
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';

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
            <UserdataWrapper>
            <OrderBlock>
              <OrderBlockTitle>
                User
              </OrderBlockTitle>
              <InternalBlock>
                <Label>DNI: {user.dni}</Label>
                <Label>Names: {user.names}</Label>
                <Label>Lastname: {user.lastname}</Label>
                <Label>Email: {user.email}</Label>
                <br />
                <br />
                <Button id={'Logout-button'} onClick={logoutRequest}  color='secondary' variant="contained">Logout</Button>
                <br />
                <br />
                <Button id={'LogoutAll-button'} onClick={logoutAllRequest} color='secondary' variant="contained">Logout All</Button>
                <br />
                <br />
                <Button id={'Update-button'} type={"submit"} color='secondary' variant="contained">Update</Button>
      
              </InternalBlock>
            </OrderBlock>   
          </UserdataWrapper>
          )
    }
    return (
        <>
          {displayUserData(props)}
        </>
      )
  }