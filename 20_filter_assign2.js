const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Array :",arrayNumbers);

//1.find the numbers which are greater than 50.

const greater = arrayNumbers.filter( (element)=> {
    return element>=50;
} );

console.log(`1. Numbers which are greater than 50:${greater}`);
console.log("");

//2.find the even numbers
const evenNum = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );


console.log(`2. Even Numbers are: ${evenNum}`);
console.log("");

//3.find the odd numbers

const oddNum = arrayNumbers.filter( (element)=> {
    return element%2!=0;
} );

console.log(`3. Odd Numbers are: ${arrayNumbers}`);
console.log("");

//4.find the numbers which are multiple of 5.

const multiple = arrayNumbers.filter((element)=> {
    return element%5==0;
} );

console.log(`4. Numbers which are multiple of 5 : ${multiple} `);
console.log("");

//5. find the numbers which are between 20 and 50

const between = arrayNumbers.filter((element)=> {
    return 20<element && element<50;
});

console.log(`5. Numbers between 20 and 50 are : ${between}`);
