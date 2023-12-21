
const { error } = require("console");

const generateRandomNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

resolvedPromise().then((response) => {
  console.log(`O número aleatório gerado é: ${response}`);
})

const rejectPromise = () =>
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject (new Error(`O número ${randomNumber} é inválido!.`))
    }, 1000);
  });

  const randomPromise = () => 
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 2 === 0) {
          return resolve(randomNumber);

        } return reject(new Error (`O número ${randomNumber} não pode ser gerado, é ímpar!`))
    }, 1000);
  });

  rejectPromise().then((response) => {
    console.log(`O número aleatório gerado é: ${response}`);
  }).catch((error) => {
    console.log(`Rejected promise: ${error.message}`);
   })

   randomPromise().then(response => {
    console.log(`O número gerado é: ${response}`);
   }).catch((error) => {
    console.log(`Promise rejeitada: ${error.message}`);
   });