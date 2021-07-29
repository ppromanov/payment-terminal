import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

const CellProvider = ({ provider: { title, logo }, id }) => {
  const { selectProvider } = useContext(Context);

  return (
    <Link to={`/terminal/${title}`}>
      <img
        src={logo}
        alt={title}
        className={title + ' cell-selector'}
        onClick={() => {
          selectProvider(id);
          console.log(id);
        }}
      />
    </Link>
  );
};
export default CellProvider;
