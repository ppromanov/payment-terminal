import React from 'react';
import CellProvider from './CellProvider';
import providersList from '../cellProviders/cellProviders';

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="prov-selector">
        {providersList.map((provider, id) => (
          <CellProvider key={id} provider={provider} id={id} />
        ))}
      </div>
      <center>
        <h2>Выберите провайдера, для пополнения счета</h2>
      </center>
    </div>
  );
};

export default MainScreen;
