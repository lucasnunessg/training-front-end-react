const API_BASE = 'https://akabab.github.io/superhero-api/api';

fetch (`${API_BASE}/all.json`).then((response) => {
    return response.json().then((data) => console.log(data));
})


const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const MAX_HEROES = 1000;

const randomId = Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
});

const id = randomId();

