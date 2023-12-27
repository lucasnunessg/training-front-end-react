import './style.css';

const API_BASE = 'https://viacep.com.br/ws/${cep}/json/';
let cep = '';
const buscarButton = document.getElementById('btn');
const buscarCep = document.getElementById('cep');
const enderecoContainer = document.getElementById('endereço'); 
buscarButton.addEventListener('click', async () => { 
  try {
    const response = await fetch(API_BASE.replace('${cep}', cep));
    const data = await response.json();
    console.log(data);

    const enderecoHTML = document.createElement('p');
    enderecoHTML.className = 'endereco-info'; 
    enderecoHTML.innerHTML = `Endereço: ${data.logradouro}, 
      ${data.bairro}, ${data.localidade}, ${data.uf}`;
    
    enderecoContainer.innerHTML = '';

    enderecoContainer.appendChild(enderecoHTML);

    buscarCep.value = data.cep;
  } catch (error) {
    console.log(error);
  }
}); 

buscarCep.addEventListener('input', (event) => {
  cep = event.target.value;
});
