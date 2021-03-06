import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import cookies from '../../libs/CookiesApp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SERVER_HOST } from '../../libs/ServerConnection';

const theme = createTheme();

export default function SettingSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const update_data = {
      names: data.get('names'),
      lastname: data.get('lastname'),
      email: data.get('email'),
    }
    const headers = {
      'headers': { Authorization: "Token " + cookies.get("Token") }
    }
    axios.post(SERVER_HOST + '/api/auth/change-data/', update_data, headers);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const update_data = {
      password: data.get('password'),
    }
    const headers = {
      'headers': { Authorization: "Token " + cookies.get("Token") }
    }
    axios.post(SERVER_HOST + '/api/auth/change-password/', update_data, headers);
  };

  return (
    <ThemeProvider theme={theme}>
            <br></br>
            <h2><center>Update</center></h2>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 , textAlign: 'center'}}>
              <TextField
                margin="normal"
                required
                sx={{width: '55%'}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {/* <TextField
                margin="normal"
                required
                sx={{width: '55%'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              {/* <TextField
                margin="normal"
                required
                sx={{width: '55%'}}
                name="DNI"
                label="DNI"
                type="DNI"
                id="DNI"
                autoComplete="current-DNI"
              /> */}
              <TextField
                margin="normal"
                required
                sx={{width: '55%'}}
                name="names"
                label="names"
                type="names"
                id="names"
                autoComplete="current-names"
              />
              <TextField
                margin="normal"
                required
                sx={{width: '55%'}}
                name="lastname"
                label="lastname"
                type="lastname"
                id="lastname"
                autoComplete="current-lastname"
              />
              
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2,width: '55%' }}
              >
                Update
              </Button>
              <Grid container>
                
              </Grid>
            </Box>
            <br></br>
            <h2><center>Change Password</center></h2>
            <Box component="form" noValidate onSubmit={handlePasswordChange} sx={{ mt: 1 , textAlign: 'center'}}>
              <TextField
                margin="normal"
                required
                sx={{width: '55%'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2,width: '55%' }}
              >
                New Password
              </Button>
              <Grid container>
                
              </Grid>
            </Box>
    </ThemeProvider>
  );
}