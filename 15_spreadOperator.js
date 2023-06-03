'use strict'
const array = [11, 22, 33, 44, 55, 66];
console.log(array);
console.log(...array);

const array2 = [...array];

const person = {
    name: "Stew",
    age: 57,
    country: "US"
}

const person2 = {...person};
console.log(person2);