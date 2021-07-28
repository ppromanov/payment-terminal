import React from 'react';

const CellProvider = ({ provider: { title, logo }, id, selectProvider }) => (
  <img
    src={logo}
    alt={title}
    className={title + ' cell-selector'}
    onClick={() => selectProvider(id)}
  />
);

export default CellProvider;
