import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ColorPairs from './color-pairs/ColorPairs';

ReactGA.initialize('UA-201234884-1');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/color-pairs" children={<ColorPairs />} />
      </Switch>
    </Router>
  );
}

export default App;
