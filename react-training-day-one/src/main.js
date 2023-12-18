import { nanoid } from 'nanoid';

const passwordButton = document.querySelector('button');
const displayBtn = document.querySelector('h2');
const button1 = document.getElementById('button1');
const displayBtn1 = document.querySelector('h3');
const changeText = document.getElementById('button2');
const changeText1 = document.querySelector('h4');

passwordButton.addEventListener('click', () => {
const randPassword = nanoid();
displayBtn.innerHTML = randPassword;
});

changeText.addEventListener('click', () => {
changeText1.innerHTML = 'mudou, viu?';
})

button1.addEventListener('click', () => {
const randPassword1 = nanoid();
displayBtn1.innerHTML = randPassword1;
});

