import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer>
      <h1>FOOTER</h1>
      <FontAwesomeIcon icon={faCopyright} size="1x" /> {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
