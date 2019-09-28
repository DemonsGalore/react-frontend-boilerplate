import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: 'Lato', sans-serif;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }
  main {
    display: flex;
    flex-grow: 1;
  }
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
