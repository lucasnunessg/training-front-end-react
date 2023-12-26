import './style.css';

const getButtonDog = document.getElementById('randomDog');
const getButtonCat = document.getElementById('randomCat');

getButtonDog.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            const imgDog = document.getElementById('randomPetImage')
            imgDog.src = data.message;
        })
        .catch((error) => {
            console.error('Erro ao buscar imagem de cachorro:', error);
        });
});

getButtonCat.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json()
    .then((data) => {
        const imgCat = document.getElementById('randomPetImage')
        imgCat.src = data[0].url;
    }))
    .catch((error) => {
        console.log('Erro ao buscar imagem de gato:', error);
    });
});

