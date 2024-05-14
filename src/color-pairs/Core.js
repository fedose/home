import React from 'react';
import './ColorPairs.css';

function Core(props) {
  return (
    <div
      className="core"
      style={{backgroundColor: props.color}}
    >
    </div>
  );
}

export default Core;
