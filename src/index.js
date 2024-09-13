import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import theme from './Theme/Theme';
import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM');
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </ChakraProvider>
);
