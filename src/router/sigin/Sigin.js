import styled from '@emotion/styled'
import { Button } from '@mui/material';
import React from 'react'
import Banner from '../../img/banner.jpg'

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

const FormWrapper = styled.div`
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
  /* margin-left: 10px; */
  /* margin: 0 10px 0px 10px; */
`;
const Title = styled.h1`
  /* margin-left: 10px; */
  margin-bottom: 1em;
  font-size: 1.5em;
  color: green;
`;

const RightSide = styled.div`
  background-color: white;
`;

const Sigin = () => {
  return (
    <SiginWrapper>
      {/* Left Side */}
      <LeftSide>
      </LeftSide>
      {/* Rigth Side */}
      <RightSide>
        <FormWrapper>
          <Title>Sign In to Stonks</Title>
          <Label>Email</Label>
          <Input type="email" />

          <Label>Password</Label>
          <Input type="password" />
          <br/>
          <br/>
          <Button color='secondary' variant="contained">Login</Button>
        </FormWrapper>
      </RightSide>
    </SiginWrapper>
  )
}

export default Sigin