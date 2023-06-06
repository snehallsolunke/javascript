//function:
function funct2(){
}
// function expression:
let funct1 = function (){
}
//funct function:
let funct = () => {
    console.log("Good Morning, Today is Monday!");
}
console.log(".......   1. no arguments no return value....");
funct();

console.log(".......   2. Three arguments no return value....");
let arrow1 = (x,y,z=1) => {
    let multiplication=x*y*z;
    console.log(`Multiplication of ${x} ${y} ${z}  is: ${multiplication}.`);
    return multiplication;
}
arrow1(5,5,2);
arrow1(10,4);
// let a=arrow1(10,4);
// console.log(` multiplication of numbers when 3rd number is not given default Z=1 ${a}`);

let arrow2 = (a,b,c,d,e) => {
   let add=a+b+c+d+e;
//    console.log(`3. Addition of nubmers ${a} ${b} ${c} ${d} ${e} is ${add} `);
   return add;
}
// console.log(arrow2(100,100,200,349,756));
let store=arrow2(100,100,200,349,756);
console.log(".......   3. Five arguments & return value....");
console.log(`Addition of numbers is : ${store}.`);
//  console.log(`Addition of nubmers ${a} ${b} ${c} ${d} ${e} is ${store}`);
