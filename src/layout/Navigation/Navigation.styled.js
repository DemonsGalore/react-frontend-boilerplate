import styled from "styled-components";

export const StyledNavigation = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  box-shadow: ${({ theme }) => theme.shadowTwo};
  background-color: ${({ theme }) => theme.primaryDarkTransparent};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    height: 3rem;
    padding: 1rem 0.5rem;
  }

  ul a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem;
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.primaryLight};
  }

  ul a:hover {
    color: ${({ theme }) => theme.primary};
  }

  .dropdown > ul {
    position: absolute;
    display: flex;
    top: 0;
    margin-top: 3rem;
    margin-left: -0.5rem;
    flex-direction: column;
    height: 12rem;
    transition: opacity 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadowTwo};
    visibility: hidden;
    opacity: 0;
  }

  .dropdown:hover > ul {
    visibility: visible;
    opacity: 1;
  }

  .dropdown > ul > li {
    background-color: ${({ theme }) => theme.primaryLight};
    transition: background-color 0.3s ease;
  }

  .dropdown > ul > li > a {
    color: ${({ theme }) => theme.primaryDark};
  }

  .dropdown > ul > li:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  .dropdown ul li: hover a {
    color: ${({ theme }) => theme.primaryLight};
  }
`;
