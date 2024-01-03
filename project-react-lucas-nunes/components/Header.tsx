const userName = {
  name: 'Lucas',
  lastName: 'Nunes',
};

function Header() {
  return (
    <header>
      <h1>
        {`Oiii, seja bem vindo(a) ${userName.name} ${userName.lastName}`}
      </h1>
    </header>
  );
}

export default Header;
