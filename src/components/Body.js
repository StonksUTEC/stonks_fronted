import React from 'react';
import "./Body.css";
import styled from '@emotion/styled';
import LandingBanner from "../img/banner_landing.mp4";

const VideoBannerWrapper = styled.div`
  display: grid;
  height: 80vh;
  width: 100vw;
  color: black;
  padding: 0;
  margin: 0;
  font-family: Roboto;
  z-index: -1;
  opacity: 0.3;
  position: absolute;
`;

const VideoBanner = styled.video`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  top: 1;
  left: 0;
  z-index: -1;
  /* position: absolute; */
  object-fit: cover;
`;

const VideBannerContainer = styled.div`
  position: relative;
  z-index: -1;
  width: 100vw;
  text-align: center;
`;


const Description = styled.div`
  margin-top: 40vh;
`
const Title = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 400;
  font-family: 'Roboto';
`;
const SubTitle = styled.h1`
  color: white;
  font-size: 2em;
  font-weight: 300;
  font-family: 'Roboto';
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: red;
  font-size: 1em;
  position: fixed;
  z-index: 2;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover, &:active, &:focus, &:after { 
    outline: none;
    border-color: green;
    background-color: green;
  }
`;



const Body = () => {
  return (
    <div className='body__wrapper' style={{ justifyContent: 'normal' }}>

      <VideBannerContainer>
        <VideoBannerWrapper>
          <VideoBanner src={LandingBanner} autoPlay loop muted />
        </VideoBannerWrapper>
        <Description>
          <Title>La mejor plataforma para aprender</Title>
          <SubTitle>el mercado de valores</SubTitle>
        </Description>
        <Button>Registrate</Button>

      </VideBannerContainer>
    </div>
  )
}

export default Body