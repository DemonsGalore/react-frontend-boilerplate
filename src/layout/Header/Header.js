import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = ({ isMobile }) => {
  return (
    <StyledHeader isMobile={isMobile}>
      <NavLink to="/"><h1>SITE</h1></NavLink>
    </StyledHeader>
  );
};

export default Header;
