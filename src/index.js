import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

