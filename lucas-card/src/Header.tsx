
import { calculateAge } from "./utils/age";

function Header() {
  const birthday = '19/08/1999';
  const age = calculateAge(birthday);
  const name = 'Lucas Nunes';
  const role = 'Front End';
  const bio = 'Natural de São Gabriel-RS, acadêmico de Engenharia de Software, aluno da Trybe';

  return (
    <header className="header-card">
      <div className="header-profile">
        <img className="header-image" src="https://avatars.githubusercontent.com/u/114934451?v=4" alt="Profile"></img>
        <a href="https://www.linkedin.com/in/lucas-nunes-750688241/" target="_blank" rel="noopener noreferrer">
          <img className="linkedin-icon" src="https://img.freepik.com/vetores-premium/logotipo-quadrado-do-linkedin-isolado-no-fundo-branco_469489-892.jpg" alt="LinkedIn"></img>
        </a>
      </div>
      <div className="header-content">
        <h1>{`${name}, ${age}`}</h1>
        <h2>{role}</h2>
        <h3>{bio}</h3>
      </div>
    </header>
  );
}


export default Header;
