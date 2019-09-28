import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/imprint">Imprint</NavLink></li>
        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
