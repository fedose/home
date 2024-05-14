import React from 'react';
import './ColorPairs.css';

function Icon(props) {
  return (
    <img className="icon"
      src={props.src}
      alt={props.alt}
    />
  );
}

export default Icon;
