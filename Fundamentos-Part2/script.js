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

// Challengue
// "Rafa" tiene 3 amigos,  su mejor amigo  se llama David

// console.log(`${rafa.nombre} tiene ${rafa.amigos.length} amigos y su mejor amigo se llama ${rafa.amigos[0]}`)

// const rafa = {
//   nombre: "Rafa",
//   apellido: "Lopez",
//   fechaNacimiento: 1994,
//   trabajo: "Programador",
//   amigos: ["David", "Agus", "Valentina"],
//   calcEdad: function () {
//     this.edad = 2022 - this.fechaNacimiento;
//     return this.edad;
//   },
//   licenciaConducir: true,
//   getSummary: function () {
//     return `${this.nombre} y es un ${
//       this.trabajo
//     } de ${this.calcEdad()} anyos de edad y ${
//       this.licenciaConducir ? "tiene" : "no tiene"
//     } licencia de conduccion`;
//   },
// };

// console.log(rafa.calcEdad());

// //Challenge
// //Rafa es un profesor de 28 anyos, y tiene licencia de conducir

// console.log(rafa.getSummary());

/* Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for heir full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �
*/

// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//    this.bmi = this.mass / (this.height * this.height);
//    return this.bmi;
//   }
// };
// console.log(Mark.calcBMI());

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function()  {
//     this.bmi =  this.mass / (this.height * this.height);
//     return this.bmi
//   }
// };
// console.log(John.calcBMI());

// if(Mark.calcBMI() > John.calcBMI()){
//   console.log(`El BMI de ${Mark.fullName} '${Mark.bmi}' es superior al BMI '${John.bmi}' de ${John.fullName}`)
// } else {
//   console.log(`El BMI de ${John.fullName} '${John.bmi}' es superior al BMI '${Mark.bmi}' de ${Mark.fullName}`)}

// console.log('Pruebaaa 1');
// console.log('Pruebaaa 2');
// console.log('Pruebaaa 3');
// console.log('Pruebaaa 4');
// console.log('Pruebaaa 5');
// console.log('Pruebaaa 6');
// console.log('Pruebaaa 7');
// console.log('Pruebaaa 8');

// for(let prueba = 50; prueba<=10; prueba++){
//   console.log(`Pruebaaa ${prueba}`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1994,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; jonas.length > i; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1990, 1994, 2000, 2010];
// const edad = [];

// console.log(`***** Calcular la edad bucle en array *****`);
// for (let i = 0; i < years.length; i++) {
//   edad.push(2022 - years[i]);
// }
// console.log(edad);

// //Continue and break
// console.log(`* --- SOLO STRING --- *`)
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log(`* ---  BREAK CON NUMERO --- *`)
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1994,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i])
// };

for(let exercise = 1; exercise <= 4; exercise++){
  console.log(`Empezando ejercicio ${exercise}`);

  for(let rep = 1; rep < 6; rep++){
    console.log(`Ejercicio ${exercise} : Serie con peso repeticion ${rep}`)
  }
}
