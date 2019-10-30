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
    padding: ${({ theme }) => theme.paddingDesktop};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    main {
      padding: ${({ theme }) => theme.paddingMobile};
    }
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;
