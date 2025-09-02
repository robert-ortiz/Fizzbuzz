import Calcular from './sumador.js';

const first = document.querySelector('#primer-numero');
const div = document.querySelector('#resultado-div');
const form = document.querySelector('#fizzbuzz-form');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML ='<p>' + Calcular(firstNumber) + '<p>' ;
});
