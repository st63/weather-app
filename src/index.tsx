import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    color: #fff;
    line-height: 24px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const theme = {
  media: {
    largeDesktops: '(max-width: 1470px)',
    mediumDesktops: '(max-width: 1199px)',
    smallDesctops: '(max-width: 991px)',
    tablets: '(max-width: 767px)',
    phones: ('max-width: 480px'),
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

