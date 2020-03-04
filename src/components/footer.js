import React from 'react';
import PropTypes from 'prop-types';
import Icon from './partials/Icon';
import {
  EmailSVG,
  GitHubSVG,
  InstagramSVG,
  TwitterSVG,
} from './partials/SVGIcon';

function Footer({ author, email, username }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="footer-container">
      <div className="footer">
        <div className="social-menu-container">
          <nav aria-label="Social Menu">
            <ul className="social-menu">
              <li>
                <Icon
                  link={`mailto:${email}`}
                  text="Contact via Email"
                  SVG={EmailSVG}
                />
              </li>
              <li>
                <Icon
                  link={`https://twitter.com/${username}`}
                  text="Open Twitter account in new tab"
                  SVG={TwitterSVG}
                />
              </li>
              <li>
                <Icon
                  link={`https://instagram.com/${username}`}
                  text="Open Instagram account in new tab"
                  SVG={InstagramSVG}
                />
              </li>
              <li>
                <Icon
                  link={`https://github.com/${username}`}
                  text="Open GitHub account in new tab"
                  SVG={GitHubSVG}
                />
              </li>
            </ul>
          </nav>
        </div>
        <div className="copyright">
          <p>
            © {currentYear} {author}
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  author: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
};

Footer.defaultProps = {
  author: '',
  email: '',
  username: '',
};

export default Footer;
