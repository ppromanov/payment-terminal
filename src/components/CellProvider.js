import React from 'react';
import { Link } from 'react-router-dom';

const CellProvider = ({ provider: { title, logo } }) => {
  return (
    <Link to={`/terminal/${title}`}>
      <img src={logo} alt={title} className={`${title} cell-selector`} />
    </Link>
  );
};
export default CellProvider;
