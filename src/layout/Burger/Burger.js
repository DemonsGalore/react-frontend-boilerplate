import React from 'react';
import PropTypes from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <StyledBurger menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Burger;
