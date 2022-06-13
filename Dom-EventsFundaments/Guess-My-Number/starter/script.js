'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const contenido = document.querySelector('.contenido');

let numeroSecreto = Math.floor(Math.random() * 80) + 1;
console.log(numeroSecreto);

let vidas = 5;
let aciertos = 0;

btnCheck.onclick = () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = `🚫 Introduce un numero!!`;
  } else if (guess === numeroSecreto) {
    document.querySelector('.adivina').textContent = `✨ Acertaste!!!`;
    document.querySelector('.number').textContent = numeroSecreto;
    contenido.style.backgroundColor = `green`;
    aciertos++;
    document.querySelector('.highscore').textContent = aciertos;

  } else if (guess !== numeroSecreto){
    if (vidas > 1){
        document.querySelector('.adivina').textContent = guess > numeroSecreto ?  `Te pasaste...` : `Es mas alto...`;
        vidas--;
        document.querySelector('.score').textContent = vidas;
    } else{
        document.querySelector('.number').textContent = numeroSecreto;
        document.querySelector('.score').textContent = 0
        contenido.style.backgroundColor = `red`
        document.querySelector('.adivina').textContent = `Perdiste...!!`
    }
  }
  
  
};


btnAgain.onclick = () => {
  numeroSecreto = Math.floor(Math.random() * 80) + 1;
  console.log(numeroSecreto);
  vidas = 5;

  document.querySelector('.adivina').textContent = `Adivina Mi Numero!`;
  document.querySelector('.number').textContent = `?`;
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.score').textContent = vidas;


  contenido.style.backgroundColor = `#222`;
};
