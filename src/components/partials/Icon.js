import React from 'react';

function Icon({ link, SVG, text }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className="screen-reader">{text}</span>
      <SVG />
    </a>
  );
}

export default Icon;
