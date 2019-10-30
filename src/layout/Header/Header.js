import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/"><h1>LOGO</h1></NavLink>
    </StyledHeader>
  );
};

export default Header;
