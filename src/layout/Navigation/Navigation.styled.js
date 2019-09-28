import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: end;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
  }

  ul > li {
    padding: 1rem;
  }

  ul a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryDark};
  }

  ul a:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;
