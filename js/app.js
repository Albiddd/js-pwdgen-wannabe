
const nome = prompt('Scrivi il tuo Nome');
const cognome = prompt('Scrivi il tuo Cognome');
const colore = prompt('Scrivi il tuo Colore preferito');

const num = Math.round(Math.random() * 100);

const password = document.getElementById('password');

password.innerHTML = nome + cognome + colore + num;

