
console.log(`1. Find the Greatest Num amongst Given Nos:`);
function GreatestNum(num1, num2) { 
 
    console.log(`   given Nos. ${num1} & ${num2}.`)
    var greaternumber= num1>num2 ? `   ${num1} is greatestnumber.` : `   ${num2} is greatestnumber. `;
    return greaternumber;
}
var largestNum = GreatestNum(10,-10);
console.log(largestNum);
// or 
console.log(GreatestNum(800,899));
console.log("***************************************");
console.log("");

console.log(`2. Find Odd or Even Number from given Numbers`);
var num = function(n) {
    var result= n %2==0 ? `Number ${n} is Even` : `number ${n} is Odd`;
    return result;
}
console.log("  ",num(29));
console.log("  ",num(44));
console.log("  ",num(0));
console.log("  ",num(101));

console.log("***************************************");
console.log("");

console.log(`3. Determine Length of the given words whether Even or odd`);

var word = function w (words) {
    L=words.length;
    console.log(`   given word is:${words} Length is:${L}`);
    var result= L % 2==0 ? '   length of word is Even.': '   length of word is Odd.';
    return result;
}
console.log(word("JavaScript"));
console.log(word("Developer"));
console.log(word("Google"));
console.log(word("Microsoft"));





