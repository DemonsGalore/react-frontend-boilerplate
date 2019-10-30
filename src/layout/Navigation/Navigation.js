import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li className="dropdown">
          <NavLink to="/">Shop&nbsp;<FontAwesomeIcon icon={faChevronDown} size="1x" /></NavLink>
          <ul>
            <li><NavLink to="/">Submenu 1</NavLink></li>
            <li><NavLink to="/">Submenu 2</NavLink></li>
            <li><NavLink to="/">Submenu 3</NavLink></li>
            <li><NavLink to="/">Submenu 4</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
