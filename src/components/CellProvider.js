import React from 'react';

const CellProvider = ({ provider: { title, logo }, id, selectProvider }) => (
  <img
    src={logo}
    alt={title}
    className={title}
    onClick={() => selectProvider(id)}
  />
);

export default CellProvider;
