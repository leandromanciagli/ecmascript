// Default values parameters

// Before es6
function newFunction(name, age, country) {
    var name = name || 'Leandro';
    var age = age || 25;
    var country = country || 'AR';
    console.log(name, age, country); 
}

// es6
function newFunction2(name = 'Leandro', age = 25, country = 'AR') {
    console.log(name, age, country);
}
newFunction2(); // Default values will set in the function
newFunction2('Martin', 26, 'MX'); // Values will be passed to the function


// Concatenate - literal template

// Before es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// Salto de línea en String

// Before es6
let phrase = "Esta es una frase épica que necesitamos en nuestro string. \n"
+ "Esta es otra frase que necesitamos en nuestro string debajo de la primera."
console.log(phrase);

// es6
let phrase2 = `Esta es una frase épica que necesitamos en nuestro string. 
Esta es otra frase que necesitamos en nuestro string debajo de la primera.`
console.log(phrase2);


// Desestructurar objeto

// Before es6
let person = {
    'name': 'Leandro',
    'age': 25,
    'country': 'AR'
}
console.log(person.name, person.age);

// es6
let { name, age } = person;
console.log(name, age);

// Spread Operator

// Before es6
let education = ['David', 'Oscar', 'Julian', 'Leandro', 'Valeria', 'Yesica', 'Camila'];
console.log(education);

// es6
let team1 = ['Oscar', 'Julian', 'Leandro'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

// Variables Scope

// Before es6
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
}

console.log(globalVar); // print 'Global Var'. Global Scope
console.log(globalLet); // error. Block code Scope

const a = 'b';
a = 'a'; // error. const variable cannot change value


// Propiedad de objetos mejorada

// Before es6
let name = 'Leandro';
let age = 25;
obj = { name: name, age:age }
console.log(obj);

// es6
obj2 = { name, age }
console.log(obj2);


// Arrow functions

// Before es6

const names = [
    { name: 'Leandro', age: 25 },
    { name: 'Camila', age: 23 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// es6 (Más amigable, se ahorra código quitando la palabra function y las llaves del bloque de código).
let listOfNames2 = names.map(item => console.log(item.name));

// Otra forma (Sin utilizar la funcion map. Sólo se ponen los parámetros entre paréntesis y la flecha => para indicar la función).
let dinero = 100
let masDinero = 25
const contarDinero = (dinero, masDinero) => {
    console.log(dinero + masDinero);
}
contarDinero(dinero, masDinero)

// Forma con un sólo parámetro. Sin paréntesis.
const printName = name => { console.log(name) }
printName('Leandro')

// Otra forma. Arrow function que recibe un parámetro num y retorna implícitamente el resultado de la operación.
const square = num => num * num

// Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!')
        }else{
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(console.log('hola!'))
    .catch(error => console.log(error))


class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator()
console.log(calc.sum(4, 7));

import { hello } from './module';

hello();

function* helloWorld () {
    if(false) {
        yield 'Leandro';
    }
    if(true) {
        yield 'Camila';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);