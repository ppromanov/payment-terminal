import React, { Fragment } from 'react';
import CellProvider from './CellProvider';

const MainScreen = ({ providersList, selector }) => {
  return (
    <Fragment>
      <div className="prov-selector">
        {providersList.map((provider, id) => (
          <CellProvider
            key={id}
            provider={provider}
            onClick={(e) => selector(id)}
          />
        ))}
      </div>
      <center>
        <h2>Выберите провайдера, для пополенения счета</h2>
      </center>
    </Fragment>
  );
};

export default MainScreen;
