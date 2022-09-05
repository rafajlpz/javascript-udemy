'use strict';

const firstName = 'Rafael';
calcAge(1994);

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const output = `${firstName}, tienes ${age}, nacido en ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
        const string = `Eres un millenial, ${firstName}`
        console.log(string)

        function add (a, b){
            return a + b;
        }
        console.log(add(2 , 3))
    }
  }
  printAge();
  return age;
}
