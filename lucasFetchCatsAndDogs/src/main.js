import './style.css';

const getButtonDog = document.getElementById('randomDog');
const getButtonCat = document.getElementById('randomCat');

getButtonDog.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imgDog = document.getElementById('randomPetImage');
        imgDog.src = data.message;
    } catch (error) {
        console.error('Erro ao buscar imagem de cachorro:', `${error.message}`);
    }
});

     getButtonCat.addEventListener('click', async (event) => {
            event.preventDefault();
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await response.json();
                const imgCat = document.getElementById('randomPetImage');
                imgCat.src = data[0].url;
            } catch (error) {
                console.error('Erro ao buscar imagem de gato:', `${error.message}`);
            }
        });