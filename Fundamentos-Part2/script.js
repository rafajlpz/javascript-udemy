"use strict";

// let tieneCarnet = false;
// const testAprobado = true;

// if(testAprobado) tieneCarnet = true;
// if(tieneCarnet) console.log('Puedo conducir')

// function calcularEdad1(anyo){
//     return 2022 - anyo;
// }
// const edad1 = calcularEdad1(1994);
// console.log(edad1);

// const calcularedad2 = function (anyo){
//     return 2022 - anyo;

// }
// const edad2 = calcularedad2(1999);
// console.log(edad1,edad2);

// Funcion Flecha
// const calcularEdad = anyo => 2022 - anyo;

// const nuevaFuncionFlecha = anyo =>{
//     const edad = 2022 - anyo;
//     const jubilacion = 100 - edad;
//     return `Tu edad es de ${edad},
//     tu edad de jubilacion seria a los ${jubilacion}`;
// }
// console.log(nuevaFuncionFlecha(1994));

// function  cortarPiezaFruta(fruta){
//     return fruta * 4;
// }

// function procesadorDeFruta(manzanas, naranjas){
//     const piezaManzana = cortarPiezaFruta(manzanas);
//     const piezaNaranja = cortarPiezaFruta(naranjas);

//     const zumo = `Zumo hecho con ${piezaManzana} piezas de manzana y ${piezaNaranja} piezas de naranja`;
//     return zumo;
// }

// console.log(procesadorDeFruta(5,2));

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �

GOOD LUCK �
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3,4,5))

// //Test 1
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   avgDolphins = scoreDolphins;
//   avgKoalas = scoreKoalas;

//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins ganan ${scoreDolphins} a Koalas ${scoreKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas ganan ${scoreKoalas} a Dolphins ${scoreDolphins}`);
//   } else {
//     console.log("Nadie gana");
//   }
// };
// checkWinner();

//Funcion para calcular la edad
// const calcularEdad = (anyo) =>{
//     return 2022 - anyo;
// }

// //Array que almacena a;os
// const anyos = [1994, 2000, 2006];

// //Edades de cada persona
// const edad1 = calcularEdad(anyos[0]);
// const edad2 = calcularEdad(anyos[1]);
// const edad3 = calcularEdad(anyos[2]);
// console.log(edad1,edad2,edad3);

// //Almacenar las edades de cada persona en un array
// const edades = [calcularEdad(anyos[0]),calcularEdad(anyos[1]),calcularEdad(anyos[2])];
// console.log(edades);

// const amigos = ["David", "Rafa", "Peter"];
// console.log(amigos);

// const newLength = amigos.push("Hector");
// console.log(newLength);
// console.log(amigos);

// amigos.unshift("Serg"); //Es un metodo que tiene la misma funcion que un push
// console.log(amigos);
// //Eliminar elementos de un array
// amigos.pop();
// console.log(amigos);

// console.log(amigos.indexOf('Peter'));
// console.log(amigos.includes("Rafa")); //Verifica si esta dentro del array

// if (amigos.includes("Rafa")){
//     console.log("El array incluye Rafa");
// }

/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new
array) �

GOOD LUCK �

*/
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [
//     calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])
// ];

// const totales = [
//     bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]
// ];

// console.log(bills, tips, totales);

const rafa = {
    nombre: 'Rafa',
    apellido: 'Lopez',
    edad: '28',
    trabajo: 'Programador',
    amigos: ['David', 'Agus', 'Valentina']
}
// Challengue
// "Rafa" tiene 3 amigos,  su mejor amigo  se llama David

console.log(`${rafa.nombre} tiene ${rafa.amigos.length} amigos y su mejor amigo se llama ${rafa.amigos[0]}`)