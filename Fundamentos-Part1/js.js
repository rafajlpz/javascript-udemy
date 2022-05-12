

const edad = 15;
const edadPermitida = edad >= 18;

if(edadPermitida){
    console.log(`La persona indicada puede conducir `)
} else {
    const faltan = 18 - edad;
    console.log(`La persona no cumple el minimo de edad, te falta ${faltan} años`)
}

const nacimiento = 1994;
let siglo;

if (nacimiento>=2000){
    console.log(`Eres del ${siglo = 21}`)
} else {
    console.log(`Eres del siglo ${siglo = 20}`);
}




