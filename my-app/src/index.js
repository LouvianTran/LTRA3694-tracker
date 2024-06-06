import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme ({
  palette: {
    primary: {
      main: "#989F6F"
    },

    secondary: {
      main: "#A8C5B5"
    },

    accent: {
      main: "#87AFA8"
    },

    text: {
      main: "#0C0C08"
    },

    background: {
      main: "#F8F8F5"
    },

    test: {
      main: "#D4D4D4"
    }
  },

  // typography: {
  //   h1: {
  //     fontSize: "1.5rem"
  //   },

  //   p: {
  //     fontSize: "1rem"
  //   },

  //   caption: {
  //     fontSize: "0.5rem"
  //   },
  // },
});

theme = responsiveFontSizes(theme);

// ------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Editing theme */}
    <ThemeProvider theme={theme}>
    {/* "App" is our code */}
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
