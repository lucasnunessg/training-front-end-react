import { calculateAge } from "./utils/age";

function Header() {
  const birthday = '19/08/1999';
  const age = calculateAge(birthday);
  console.log(age);
  

  return (
  <header>
    <img src="https://avatars.githubusercontent.com/u/114934451?v=4" alt="Logo"></img>
    <h1> Lucas Nunes, {age}</h1>
    <h2>Front End</h2>
    <h3>Natural de São Gabriel-RS, acadêmico de Engenharia de Software, aluno da Trybe</h3>
  </header>
  );
}

export default Header;

// <blockquote    cite="https://www.linkedin.com/in/lucas-nunes-750688241/"></blockquote>