// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
/*
Coding Challenge #1
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
// 3. Try to change one of the changed variables now, and observe what happens
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
// const country = "Spain";
// const continent = "Europe";
// let population = 47.35+" "+"Millions";
// let isIsland = false;
// let language = "Spanish";
1. Store Mark's and John's mass and height in variables
// console.log(country,continent,population);
2. Calculate both their BMIs using the formula (you can even implement both
versions)
// console.log(typeof isIsland, typeof population, typeof country, typeof language);
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
let x = 10 + 5 // 15
x += 10 //Es lo mismo que x = x + 10 = 25
x *= 4; //Es lo mismo que  x = x * 4 = 100
x++; //Es a;adirle uno mas. Osea 101
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/* let massMark = 78;
let massJohn = 95;

let heightMark = 1.69;
let heightJohn = 1.88;

// BMI = mass / height ** 2 = mass / (height * height);

let markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

let johnkBMI = massJohn / (heightJohn * heightJohn);
console.log(johnkBMI);


let markHigherBMI = markBMI > johnkBMI;

console.log(markHigherBMI);

*/
/* 

Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK 
*/
// let massMark = 78;
// let massJohn = 95;
// let heightMark = 1.69;
// let heightJohn = 1.88;

// let markBMI = massMark / (heightMark * heightMark);
// let johnBMI = massJohn / (heightJohn * heightJohn);

// if(markBMI>johnBMI){
//     console.log(`
//     El BMI de Mark:
//     ${markBMI},
//     es superior al de John:
//     ${johnBMI}`)
// } else {
//     console.log(`
//     El BMI de John:
//     ${johnBMI},
//     es superior al de Mark:
//     ${markBMI}`)
// }

// const anyo = 1994;
// console.log(Number(anyo));
// console.log(String(28));

// let n = "1" + 1;
// n = n - 1;

//Los valores booleanos que sean 0, indefinidos, string vacio, nulo son falsos.
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const dinero = 0; //dinero al ser 0 es un valor booleano FALSO y da el ELSE como resultado
// if(dinero){
//     console.log('No lo gastes')
// } else {
//     console.log('Trabaja hostia')
// }

// const edad = '18'; //Es un strict
// if(edad === 18) console.log('Ya eres mayor de edad'); //Aqui le indico que sea codigo estricto
// if(edad == 18) console.log('Ya eres adulto (Sin ser estricto)');

// const carnetConducir = true;
// const buenaVista = true;

// //Si usamos && las dos tiene que ser verdaderas para que sea true
// console.log(carnetConducir && buenaVista);
// //Si usamos || solo basta con que una sea verdadera para que de true
// console.log(carnetConducir || buenaVista);
// //Se convierte en NOT
// console.log(!carnetConducir);

// const deberiaConducir = carnetConducir && buenaVista;
// if(deberiaConducir){
//     console.log('Rafa esta capacitado para conducir')
// } else {
//     console.log('No estas en condiciones de conducir')
// }

// const estaCansado = false;
// console.log(carnetConducir && buenaVista || estaCansado);

// const deberiaConducir = carnetConducir && buenaVista && !estaCansado;
// if(deberiaConducir){
//     console.log('Rafa esta capacitado para conducir')
// } else {
//     console.log('No estas en condiciones de conducir')
// }

/*Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK � */

// const ScoreDelfines = (96 + 108 + 89) / 3;

// const ScoreKoalas = (88 + 91 + 110) / 3;

// if (ScoreDelfines > ScoreKoalas) {
//   console.log("El average mas alto es el de los delfines");
// } else if (ScoreKoalas > ScoreDelfines) {
//   console.log("Koalas tiene avg mas alto");
// } else if (ScoreDelfines === ScoreKoalas) {
//   console.log("Hay un empate");

//BONUS 1

// const ScoreDelfines = (97 + 112 + 101) / 3;
// console.log('Average Delfines', ScoreDelfines);

// const ScoreKoalas = (109 + 95 + 123) / 3;
// console.log('Average Koalas', ScoreKoalas);

// if (ScoreDelfines > ScoreKoalas && ScoreDelfines >= 100) {
//   console.log("El average mas alto es el de los delfines");
// } else if (ScoreKoalas > ScoreDelfines && ScoreDelfines >= 100) {
//   console.log("Koalas tiene avg mas alto");
// } else if (
//   ScoreDelfines === ScoreKoalas &&
//   ScoreDelfines >= 100 &&
//   ScoreKoalas >= 100
// ) {
//   console.log("Hay un empate");
// } else {
//   console.log("Nadie gana");
// }

const dia = 'Lunes';

switch(dia){
    case 'Lunes': //Esto es lo mismo que poner dia==='Lunes' ES ESTRICTO
        console.log('Inicio de semana duro');
        console.log('Programar');
        break;
    case 'Martes':
        console.log('Programar la APP');
        break;
    case 'Miercoles':
        console.log('Audiovisuales');
        break;
    case 'Jueves':
        console.log('Toca grabar para la TV');
        break;
    case 'Viernes':
        console.log('Toca beber vino');
    default:
        console.log('Introduce un dia valido')
}