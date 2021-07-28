import React, { useState } from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import Terminal from './components/Terminal';
import beelineLogo from './images/beelineLogo.png';
import mtsLogo from './images/MTSlogo.png';
import megafonLogo from './images/megafonLogo.png';

const App = () => {
  const providersList = [
    { title: 'beeline', logo: beelineLogo },
    { title: 'MTS', logo: mtsLogo },
    { title: 'megafon', logo: megafonLogo },
  ];

  const [cellProvider, setCellProvider] = useState(null);

  const selectProvider = (id) => {
    id !== null ? setCellProvider(providersList[id]) : setCellProvider(null);
  };

  return cellProvider !== null ? (
    <Terminal cellProvider={cellProvider} selectProvider={selectProvider} />
  ) : (
    <MainScreen providersList={providersList} selectProvider={selectProvider} />
  );
};
export default App;
