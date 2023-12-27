import validator from 'validator';
import './style.css';

const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');
const isUUID = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, isUUID),
    url: validator.isURL(campoDeTexto.value),
  };

  if (campos[seletor.value] === true) {
    textoDeSaida.innerHTML = 'A validação foi concluída com sucesso!';
    textoDeSaida.style.color = 'green';
  } else {
    textoDeSaida.innerHTML = 'A validação falhou!';
    textoDeSaida.style.color = 'red';
  }
});
