import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainScreen from './components/MainScreen';
import Terminal from './components/Terminal';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path={`/terminal/:cellProvider`} component={Terminal} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
