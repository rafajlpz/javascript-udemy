'use strict';

const cubrir = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const abrirModal = document.querySelectorAll('.show-modal');
const cerrarModal = document.querySelector('.close-modal');

const cerrar = () => {
  modal.classList.add('hidden');
  cubrir.classList.add('hidden');
};

const abrir = () => {
  modal.classList.remove('hidden');
  cubrir.classList.remove('hidden');
};

for (let i = 0; i < abrirModal.length; i++) {
  abrirModal[i].onclick = () => abrir();
}

cerrarModal.onclick = () => cerrar();
cubrir.onclick = () => cerrar();
