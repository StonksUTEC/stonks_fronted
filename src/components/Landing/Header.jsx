import styled from "styled-components";
import { React } from "react";
import { Typography, Button } from "@mui/material";

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: rgba(255, 255, 255, 0.72);
  box-shadow: inset 0px -1px 1px #e7ebf0;
  backdrop-filter: blur(20px);
  /* padding-bottom: 20px; */
  /* background-color: green; */
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr auto auto 2fr auto 0.8fr;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
`;

const TogglesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* <---- NEW    */
  /* background: silver; */
  height: 100%;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonToggle = ({ text, to}) => {
  return (
    <Button
      style={{
        borderRadius: "8px"
      }}
      color="primary"
      href={to}
    >
      <Typography fontWeight="600" fontSize="14px">
        {text}
      </Typography>
    </Button>
  );
};
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div></div>
        <LogoWrapper>
          <Typography fontWeight="800" fontSize="16px" color="primary">
            STONKS |
          </Typography>
        </LogoWrapper>
        <TogglesWrapper>
          <ButtonToggle />
          {/* <MouseOverPopover text="Home" /> */}
          {/* <MouseOverPopover text="About us" /> */}
          <ButtonToggle text="Home" to="/home"/>
          <ButtonToggle text="About us" />
        </TogglesWrapper>
        <div></div>
        <ButtonsWrapper>
          <Button
            style={{
              marginLeft: "10px",
              marginRight: "5px",
              borderRadius: "8px"
            }}
            variant="contained"
            color="primary"
            href="/signin"
          >
            <Typography fontWeight="600" fontSize="14px">
              Sign In
            </Typography>
          </Button>
          <Button
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "8px"
            }}
            variant="contained"
            color="primary"
            href="signup"
          >
            <Typography fontWeight="600" fontSize="14px">
              Sign Up
            </Typography>
          </Button>
        </ButtonsWrapper>
        <div></div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
export default Header;
