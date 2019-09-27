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
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: 'Lato', sans-serif;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }
  main {
    display: flex;
  }
`;
