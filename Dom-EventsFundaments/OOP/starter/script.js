'use strict';

const Persona = function (primerNombre, anioNacimiento) {
  this.primerNombre = primerNombre;
  this.anioNacimiento = anioNacimiento;
};

const rafael = new Persona('Rafael', 1994);
console.log(rafael);

const ana = new Persona('Ana', 1996);
const sergio = new Persona('Sergio', 2000);
const jay = 'Jay';
console.log(ana, sergio);
console.log(rafael instanceof Persona);
console.log(jay instanceof Persona);
