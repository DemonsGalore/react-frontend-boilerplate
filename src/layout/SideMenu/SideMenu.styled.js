import styled from 'styled-components';

export const StyledSideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  padding: 3rem 2rem 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) => menuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
