import { Button } from '@mui/material';
import React from 'react'
import LandingComponent from '../components/Landing/LandingComponent';
import { signin } from '../connections/signinConnection';
import { signout } from '../connections/signoutConnection';
import { isAuthenticated } from '../connections/userAPI';
const LandingView = () => {
  return (
    <LandingComponent/>
    // <div >
    //     {/* <Button onClick={signin} variant="contained">Sigin</Button>
    //     <Button onClick={signout} variant="contained">Signout</Button> */}
    //     {/* <Button onClick={isAuthenticated} variant="contained">Is Authenticated</Button> */}
    //     <Button href='/signin' variant="contained">Sign In</Button>
    //     <Button href='/signup' variant="contained">Sign Up</Button>
    //     <Button href='/home' variant="contained">Home</Button>
    //     <Button href='/buy' variant="contained">Buy</Button>
    //     <Button href='/portfolio' variant="contained">Portfolio</Button>
    //     <Button href='/portfolio' variant="contained">Portfolio</Button>
    // </div>
     
  );
}

export default LandingView