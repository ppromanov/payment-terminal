import React from 'react';

const CellProvider = ({ provider: { title, logo } }) => (
  <div>
    <img src={logo} alt={title} className={title} />
  </div>
);

export default CellProvider;
