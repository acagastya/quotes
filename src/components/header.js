/* eslint-disable eqeqeq */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

function Header({ description, link = '/', showHeader, siteTitle, slug }) {
  return (
    <header id="header" className="header-container">
      <div className="header site-header">
        <nav
          id="main-menu"
          className="main-menu-container"
          aria-label="Main Menu"
        >
          <ul className="main-menu">
            <li>
              {slug == 'quote' ? (
                <BoldEntry text="Quotes" />
              ) : (
                <Link to="/quote">Quotes</Link>
              )}
            </li>
            <li>
              {slug == 'about' ? (
                <BoldEntry text="About" />
              ) : (
                <Link to="/about">About</Link>
              )}
            </li>
            <li>
              {slug == 'random' ? (
                <BoldEntry text="Random" />
              ) : (
                <Link to="/random">Random</Link>
              )}
            </li>
          </ul>
        </nav>

        {showHeader && (
          <div className="header-info">
            <p className="site-title title">
              <Link to={link}>{siteTitle}</Link>
            </p>
            {siteTitle == 'Quotes' && (
              <p className="site-description subtitle">{description}</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

function BoldEntry({ text = '' }) {
  return <span style={{ fontWeight: 700, cursor: 'default' }}>{text}</span>;
}

export default Header;
