import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackdrop } from './Backdrop.styled';

const Backdrop = ({ menuOpen, setMenuOpen }) => {
  return <StyledBackdrop menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />;
};

Backdrop.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Backdrop;
