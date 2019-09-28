import React from 'react';
import { StyledFooter } from './Footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <StyledFooter>
      <FontAwesomeIcon icon={faCopyright} size="1x" />&nbsp;{new Date().getFullYear()}
    </StyledFooter>
  );
};

export default Footer;
