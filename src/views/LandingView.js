import { Button } from '@mui/material';
import React from 'react'
import { isAuthenticated } from '../connections/userAPI';
const LandingView = () => {
  return (
    <div>
        <Button onClick={isAuthenticated} variant="contained">Is Authenticated</Button>
        <Button href='/signin' variant="contained">Sign In</Button>
        <Button href='/signup' variant="contained">Sign Up</Button>
        <Button href='/home' variant="contained">Home</Button>
        <Button href='/buy' variant="contained">Buy</Button>
        <Button href='/portfolio' variant="contained">Portfolio</Button>
        <Button href='/portfolio' variant="contained">Portfolio</Button>
    </div>
     
  );
}

export default LandingView