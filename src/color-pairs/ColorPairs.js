import React, { useCallback, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { CSSTransition } from 'react-transition-group';
import ReactGA from 'react-ga';
import Half from './Half';
import Popover from './Popover';
import PopoverSlim from './PopoverSlim';
import UpdateColor from './UpdateColor';
import PickerIcon from './PickerIcon';
import useClickOutside from './useClickOutside';
import LeftHalfIcon from './left-half.svg';
import RightHalfIcon from './right-half.svg'; 
import CoreIcon from './core.svg';
import ClickIcon from './click.svg';
import './ColorPairs.css';

function ColorPairs() {
  const Category = "Color Pairs";

  const HandleArea = () => {
    ReactGA.event({
      category: Category.toString(),
      action: "Click anywhere"
    })
  }

  const HandlePickers = () => {
    ReactGA.event({
      category: Category.toString(),
      action: "Click on pickers"
    })
  }

  const [left, setLeft] = useState("#B5B8BA");
  const [right, setRight] = useState("#F1F2A1");
  const [core, setCore] = useState("#D4D4AC");

  const popover = useRef();

  const close = useCallback(() => setpickersOpened(false), []);
  useClickOutside(popover, close);

  const [introOpened, setintroOpened] = useState(true);
  const [pickersOpened, setpickersOpened] = useState(false);

  return (
    <div
      className="app"
      onClick={() => (
        setpickersOpened(true),
        setintroOpened(false),
        HandleArea()
      )}
    >
      <Helmet>
        <title>Color Pairs – Explore color relativity</title>
        <meta charset="utf-8" />
        <meta 
          name="description" 
          content="Explore how different backgrounds affect the same color." 
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
      </Helmet>
      <CSSTransition 
        in={introOpened} 
        timeout={200} 
        classNames="popover"
        unmountOnExit
      >
        <PopoverSlim>
          <p className="intro" >
            Explore how background affects the same color.<br />
            Click anywhere to change the colors
            <span className="inline-icon" />
          </p>
        </PopoverSlim>
      </CSSTransition>
      <CSSTransition 
        in={pickersOpened} 
        timeout={200} 
        classNames="popover"
        unmountOnExit
      >
        <Popover>
          <div className="content" ref={popover}>
            <div className="color-settings">
              <div className="pickers" >
                <div>
                  <PickerIcon src={LeftHalfIcon} alt="Left half"/>
                  <HexColorPicker
                    color={left}
                    onChange={setLeft}
                    onClick={HandlePickers}
                  />
                  <HexColorInput
                    className="input"
                    color={left}
                    onChange={setLeft}
                  />
                </div>
                <div>
                  <PickerIcon src={CoreIcon} alt="Core"/>
                  <HexColorPicker 
                    color={core} 
                    onChange={setCore}
                    onClick={HandlePickers}
                  />
                  <HexColorInput 
                    className="input" 
                    color={core} 
                    onChange={setCore}
                  />
                </div>
                <div>
                  <PickerIcon src={RightHalfIcon} alt="Right half"/>
                  <HexColorPicker 
                    color={right} 
                    onChange={setRight}
                    onClick={HandlePickers}
                  />
                  <HexColorInput 
                    className="input" 
                    color={right} 
                    onChange={setRight} 
                  />
                </div>
              </div>
              <UpdateColor setLeft={setLeft} setRight={setRight} setCore={setCore}/>
            </div>
            <p className="about">
              Explore how background affects the same color.<br />
              Inspired by Josef Albers’s <i>Interaction of Color</i>.
            </p>
          </div>
        </Popover>
      </CSSTransition>
      <Half
        halfColor={left}
        coreColor={core}
      />
      <Half
        halfColor={right}
        coreColor={core}
      />
    </div>
  );
}

export default ColorPairs;
