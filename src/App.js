import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainScreen from './components/MainScreen';
import Terminal from './components/Terminal';
import Context from './context/context';
import providersList from './cellProviders/cellProviders';

const App = () => {
  const [cellProvider, setCellProvider] = useState({ title: 'main' });

  async function selectProvider(id) {
    id === null
      ? setCellProvider({ title: 'main' })
      : setCellProvider(providersList[id]);
  }
  return (
    <>
    <Context.Provider value={{ selectProvider, cellProvider }}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route
            exact
            path={`/terminal/${cellProvider.title}`}
            component={Terminal}
          />
        </Switch>
      </Router>
    </Context.Provider>
    </>
  );
};
export default App;
