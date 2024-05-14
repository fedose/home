import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Colors from './Colors';
import UpdateIcon from './update.svg';
import './ColorPairs.css';

function UpdateColor(props) {
  const HandleExample = () => {
      ReactGA.event({
        category: "Color Pairs",
        action: "Click on Another example"
      })
  }

  const colors = Colors;
  const [count, setCount] = useState(0);

  const UpdateCounter = () => {
    if (count === colors.length - 1) {
      return setCount(0);
    }
    setCount(count + 1);
  }

  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        props.setLeft(colors[count].left);
        props.setRight(colors[count].right);
        props.setCore(colors[count].core);
        UpdateCounter();
        HandleExample();
      }}
    >
      <img
        className="icon-small"
        src={UpdateIcon}
        alt="Update"
      />
      Show example
    </button>
  );
}

export default UpdateColor;