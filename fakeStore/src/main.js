import './style.css';

const BASE_URL = 'https://fakestoreapi.com/products';

function mostrarProdutos(produto) {
  const mostrarProdutos = document.getElementById('mostrarProdutos');

  // Criar um elemento de imagem
  const imagemProduto = document.createElement('img');
  imagemProduto.src = produto.image;
  imagemProduto.alt = produto.title;

  // Adicionar a imagem ao elemento que mostra os produtos
  mostrarProdutos.appendChild(imagemProduto);

  // Adicionar outras informações do produto, como título e preço
  mostrarProdutos.innerHTML += `<p>${produto.title}</p>`;
  mostrarProdutos.innerHTML += `<p>Preço: $${produto.price}</p>`;
}

async function buscarProdutos() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    // Chamar a função de renderização para cada produto
    data.forEach(produto => mostrarProdutos(produto));
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buscarProdutos();
});


mostrarProdutos();