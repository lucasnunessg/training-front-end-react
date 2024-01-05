import React from 'react';

function LuckyNumber() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }
  const [show, showNumbers] = React.useState(false);
  return (
    <>
      <h2 className="subtitle">Seus números da sorte são:</h2>
      {show && (
        <ul>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
        </ul>
      )}
      <button onClick={ () => showNumbers(!show) }>Mostrar números</button>
    </>
  );
}

export default LuckyNumber;
