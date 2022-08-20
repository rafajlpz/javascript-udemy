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

// -> Existen 3 eventos para el teclado, Aqui usamos keydown al pulsar, a;adimos una funcion con el evento y la condicion de la propiedad igual al string que haga la funcion cerrar <- //
const pulsar = document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrar();
});

for (let i = 0; i < abrirModal.length; i++) {
  abrirModal[i].onclick = () => abrir();
}

cerrarModal.onclick = () => cerrar();
cubrir.onclick = () => cerrar();
