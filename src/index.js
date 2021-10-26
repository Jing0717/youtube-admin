import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: "#007B8A",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);