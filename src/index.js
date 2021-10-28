
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = createTheme(({
  palette: {
    primary: {
      main: "#007B8A",
    },
  },
}));

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);