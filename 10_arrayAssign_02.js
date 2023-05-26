const arraynum=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array:${arraynum}`);
let L= arraynum.length;
console.log(`1. Length of array:${L}.`);
console.log(`2. First element:${arraynum[0]} Last element:${arraynum[arraynum.length-1]}.`);
console.log(`3. Third last element:${arraynum[arraynum.length-3]}`);

let even=[]; let odd=[];
for(let i=0;i<arraynum.length;i++){
    if(arraynum[i]%2==0){
        even.push(arraynum[i]);
    }else{
       odd=odd.concat(arraynum[i]);
    }
}
console.log(`4. Even nos in array: ${even}`);
console.log(`5. Odd nos in array: ${odd}`);

let EvenSum=0; let OddSum=0; 
for(let i=0; i<arraynum.length; i++) {
    if(i%2==0) {
        EvenSum = EvenSum+arraynum[i];
    }else {
        OddSum = OddSum+arraynum[i];
    }
}
console.log(`6. Sum of Even positioned nos of array: ${EvenSum}`);
console.log(`7. Sum of Odd positioned nos of array: ${OddSum}`);

let sum=0;
for (let i=0; i<arraynum.length; i++) {
    sum=sum + arraynum[i];
}
console.log(`8. Sum of all elements of array: ${sum}.`);

let five=[];
for(let i=0; i<arraynum.length; i++) {
    if(arraynum[i]%5==0) {
      five=five.concat(arraynum[i]);
    }
}
console.log(`9. Array nos. which are mulitple of 5 are: ${five}`);
console.log(`10. Is no. 115 present in array? ${arraynum.includes(115)}`);
console.log(`11. Is no. 23 present in array? ${arraynum.includes(23)}`);
console.log(`    Given array:${arraynum}`);
arraynum.splice(1,1,55,66);
console.log(`12. array after inserting 55,66 before index 3: ${arraynum}.`);
arraynum.splice(4,3);
console.log(`13. array after deleting 3 elements from index 4: ${arraynum}`);

