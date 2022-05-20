"use strict";

// let tieneCarnet = false;
// const testAprobado = true;

// if(testAprobado) tieneCarnet = true;
// if(tieneCarnet) console.log('Puedo conducir')

function calcularEdad1(anyo){
    return 2022 - anyo;
}
const edad1 = calcularEdad1(1994);
console.log(edad1);

const calcularedad2 = function (anyo){
    return 2022 - anyo;

}
const edad2 = calcularedad2(1999);
console.log(edad1,edad2);