import React from 'react';
import Core from './Core';
import './ColorPairs.css';

function Half(props) {
  return (
    <div
      className="half"
      style={{backgroundColor: props.halfColor}}
    >
      <Core
        color={props.coreColor}      
      />
    </div>
  );
}

export default Half;
