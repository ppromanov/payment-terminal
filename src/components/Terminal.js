import React from 'react';

const Terminal = ({ cellProvider: { title, logo }, selectProvider }) => {
  return (
    <div>
      <button onClick={() => selectProvider(null)}>Back</button>
      <img className={title + ' terminal-logo'} src={logo} />
      <p>{title}</p>
    </div>
  );
};

export default Terminal;
