const array = [23, 56, 78, 9, 5, 4,  0, 66, 21 ];

// WAP to get the elements greater than 50
const arrayGreaterThan50 = array.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);
// Traditional way
// const newArray = [];
// for (const element of array) {
//     if (element>50) {
//         newArray.push(element); 
//     }
// }
// console.log(newArray);

console.log("************ Get even numbers using filter () **************")
const even = array.filter( (element)=> {
    return element%2==0;
});
console.log(even);