import styled from "styled-components";
import { React } from "react";
import { Typography, Button } from "@mui/material";
import Stonks from "./img/s.jpg";
import { Avatar } from '@mui/material';
import { getUsername, isAuthenticated} from '../connections/userAPI';

const HeaderWrapper = styled.div`
align-items: center;

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
align-items: center;

  display: flex;
  justify-content: center;
`;

const HeaderView = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div></div>
        <LogoWrapper>
          <Typography fontWeight="800" fontSize="32px" color="primary" marginRight="7em">
            STONKS 
          </Typography>
        </LogoWrapper>
        <TogglesWrapper>
          <ButtonToggle />
          {/* <MouseOverPopover text="Home" /> */}
          {/* <MouseOverPopover text="About us" /> */}
        </TogglesWrapper>
        <div></div>
        <ButtonsWrapper>
        <Typography fontWeight="800" fontSize="24px" color="primary" marginRight="2em">
        Welcome 
        </Typography>
        <Avatar alt="s1" src={Stonks} sx={{ width: 60, height: 60} }/>
        </ButtonsWrapper>
        <div></div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
export default HeaderView;
