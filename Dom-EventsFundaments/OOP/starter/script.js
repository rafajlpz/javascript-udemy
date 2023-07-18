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

// Prototypes
Persona.prototype.calcularEdad = function () {
  console.log(2023 - this.anioNacimiento);
};

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// 1. Use a constructor function to implemente a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// Coding Challenge #1 POO
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
