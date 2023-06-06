const arrayNums = [10, 5, 70, 90, 100, 30, 47 ];

const array = ["Bill", "Stew Jobs", "Elon Musk", "Mark", "Sundar"];
// Length of the word and square it and then sum it all
let result = 0; // 16
array.forEach( (element) => {
     const wordLength = element.length;
     result = result + wordLength * wordLength;
} );
console.log(result);