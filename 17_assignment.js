console.log(``);
const arr=[11,3,4,11,4,7,3]; let str='',empt=` `;
for (let i=0; i < arr.length; i++) {
    for (let j=i+1; j < arr.length; j++) {
        if (arr[i]==arr[j]) {
             str=str+arr[j]+empt;      
        }
    }
}
const str3=str.split(' ');
let str2=``;
for (let p=0;p<arr.length;p++) {
   
    if(arr[p]!=str3[p]) {
        str2=str2+arr[p]+empt;
    }
}
console.log(`Given array:: ${arr}`);
console.log(``);
console.log(`Array without duplicate elements': ${str2}`);
console.log(``);

console.log(`Dupliicate elements in array are: ${str}`);
console.log(``);
