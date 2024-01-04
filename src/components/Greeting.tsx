import './style.css';

function Greeting() {
  const firstName = 'Lucas';
  const lastName = 'Nunes';

  return (
    <h1 className="greeting">
      Olá
      {' '}
      {`${firstName} ${lastName}`}
    </h1>
  );
}

export default Greeting;
