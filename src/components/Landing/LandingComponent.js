import { createTheme } from '@mui/material';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import Header from './Header'
import Landing from './Landing'
const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3537cf",
      dark: "#3537CF",
      light: "#5556e0"
    },
    secondary: {
      main: "#818181",
      light: "#ffffff",
      dark: "#676767"
    }
  }
});

const LandingComponent = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <div>
        <Header />
        <Landing />
      </div>
    </ThemeProvider>

  )
}

export default LandingComponent