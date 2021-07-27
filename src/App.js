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
    setCellProvider(id);
    console.log('pop');
  };

  return cellProvider !== null ? (
    <Terminal cellProvider={cellProvider} />
  ) : (
    <MainScreen providersList={providersList} selector={selectProvider} />
  );
};
export default App;
