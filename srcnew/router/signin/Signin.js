import styled from '@emotion/styled'
import { Button } from '@mui/material';
import React from 'react'
import Banner from '../../img/banner.jpg'
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';

const SiginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  color: black;
  font-family: Roboto;
`
const LeftSide = styled.div`
  src: url(${Banner});
  background-image: url(${Banner});
  background-size: 200%;
  width: 1fr;
  &::after {
    content: '';
    display: block;
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9));
    width: 100%;
    height: 100vh;
  }
`;

const FormWrapper = styled.form`
  margin-left: 10px;
  margin: 20% 0em 0px 40px;
  padding: 20px;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 0 10px;
  /* margin: 4px 10px 0px 10px; */
  margin-top: 5px;
  margin-bottom: 4px;
  width: 30em;
  border-color: gray;
  border-width: 2px;
  &:hover, &:active, &:focus, &::after{
    outline: none;
    border-color: green;
  }
`;
const Label = styled.label`
  display: block;
  margin-top: 20px;
  color: white;

  /* margin-left: 10px; */
  /* margin: 0 10px 0px 10px; */
`;
const Title = styled.h1`
  /* margin-left: 10px; */
  margin-bottom: 1em;
  font-size: 1.5em;
  color: white;
`;

const RightSide = styled.div`
background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
`;

const axios = require('axios');

const Signin = () => {
  const cookies = new Cookies(); 
  const navigate = useNavigate();
  const SubmitLogin = (event) => {
    event.preventDefault();
    console.log("TEST");
    const dni = document.getElementById('dni').value;
    const password = document.getElementById('password').value;
    const data = {
      'password': password, 'username': dni
    }
    console.log(data);
    axios.post('http://localhost:8000/api/auth/login/', data)
      .then(response => {
        console.log(response);
        let json = response.data;
        cookies.set("Token", json.token, {path: '/'});
        console.log("Logged In");
        navigate('/user');
      }).catch(error => {
        console.log(error)
      });
  }
  return (
    <SiginWrapper>
      {/* Left Side */}
      <LeftSide>
      </LeftSide>
      {/* Rigth Side */}
      <RightSide>
        <FormWrapper onSubmit={SubmitLogin}>
          <Title>Sign In to Stonks</Title>
          <Label>DNI</Label>
          <Input id="dni" type={'text'}/>
          {/*<div id="errordni2" class="hidden" style="color:red" >Required!</div>*/}
          <Label>Password</Label>
          <Input id="password" type="password" />
          {/*<div id="errorpassword2" class="hidden" style="color:red">Required!</div>*/}

          <br/>
          <br/>
          <Button  id={'submit-button'} type={"submit"} color='secondary' variant="contained">Login</Button>
        </FormWrapper>
      </RightSide>
    </SiginWrapper>
  )
}

export default Signin