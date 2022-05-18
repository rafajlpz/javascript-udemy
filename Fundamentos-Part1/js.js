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

const edad = '18'; //Es un strict
if(edad === 18) console.log('Ya eres mayor de edad'); //Aqui le indico que sea codigo estricto
if(edad == 18) console.log('Ya eres adulto (Sin ser estricto)');