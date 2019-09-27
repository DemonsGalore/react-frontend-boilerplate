import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavigation } from './Navigation.styled';

const Navigation = ({ menuOpen }) => {
  return (
    <StyledNavigation menuOpen={menuOpen}>
      <a href="/">About</a>
      <a href="/">Imprint</a>
      <a href="/">Contact</a>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default Navigation;
