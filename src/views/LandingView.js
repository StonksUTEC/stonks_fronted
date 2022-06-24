import { Button } from '@mui/material';
import React from 'react'
import { signin } from '../connections/signinConnection';
import { signout } from '../connections/signoutConnection';
import { isAuthenticated } from '../connections/userAPI';
import Header from './components/Header'
import Body from './components/Body';
import styled from '@emotion/styled'


const LandingView = () => {
  return (
    <div className="App" >
            <div className='app__header'>
                <Header />
            </div>
            
            <div className='app__body'><Body /></div>
            
        </div>
  );
}

export default LandingView