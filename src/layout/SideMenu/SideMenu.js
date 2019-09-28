import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledSideMenu } from './SideMenu.styled';

const SideMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <StyledSideMenu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/imprint">Imprint</NavLink></li>
        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
      </ul>
    </StyledSideMenu>
  );
};

SideMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default SideMenu;
