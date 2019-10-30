import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledFooter } from './Footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
// load separatly to prevent resizing icons
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Footer = () => {
  return (
    <StyledFooter>
            <div>
        <div>
          <a href="mailto:hello@website.de">
            <FontAwesomeIcon icon={faAt} size="2x" />
          </a>
        </div>
        <ul>
          <li><NavLink to="/imprint">Imprint</NavLink></li>
          <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
        </ul>
      </div>

      <p><FontAwesomeIcon icon={faCopyright} size="1x" />&nbsp;{new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
