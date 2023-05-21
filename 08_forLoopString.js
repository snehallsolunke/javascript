var str1 = "JavaScript Language of Internet";
console.log(`Given String- ${str1}`);
var rev=""

for (let index=str1.length ; index>=0; index--) { // index = 9  8 
    var char1 = str1.charAt(index);
    rev=rev.concat(char1);
}
console.log(`Reverse String- ${rev}`);
 