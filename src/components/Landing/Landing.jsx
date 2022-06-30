import styled from "styled-components";
import React from "react";
import { Button, Typography } from "@mui/material";
const LandingWrapper = styled.div`
  /* background-color: red; */
  height: 100vh;
`;

const LandingContent = styled.div`
  /* background-color: green; */
  margin-left: 25%;
  margin-right: 25%;
  height: 100%;
`;
const LandingTitle = styled.div`
  padding-top: 20%;
  text-align: center;
`;
const LandingImage = styled.div`
  text-align: center;
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingContent>
        <LandingTitle>
          <Typography variant="h3" textAlign="center" fontWeight="600">
            The best platform of Stocks
          </Typography>
          <Typography
            color="primary"
            variant="h6"
            textAlign="center"
            fontWeight="600"
          >
            Learning all about investing
          </Typography>
          <Button
            style={{
              marginTop: "10px",
              borderRadius: "8px"
            }}
            variant="contained"
            color="primary"
          >
            <Typography fontWeight="600" fontSize="18px">
              Start
            </Typography>
          </Button>
          <LandingImage>
            <img
              alt="landing_logo"
              style={{ width: "100%" }}
              src="https://img.freepik.com/free-vector/employee-working-office-interior-workplace-flat-vector-illustration_1150-37453.jpg?t=st=1656597210~exp=1656597810~hmac=bb444c308792d3e91052aca1941e7832849f18f47857b7d499ccb74a7683124c&w=826"
            ></img>
          </LandingImage>
        </LandingTitle>
      </LandingContent>
    </LandingWrapper>
  );
};
export default Landing;
