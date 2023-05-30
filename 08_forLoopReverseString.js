// JavaScript = J a v a S c r  i  p  t
var str = "JavaScript"; // 9
for (let index = 0; index < str.length; index++) { // 0  1   2
     var char = str.charAt(index); // J  a v
     console.log(char); 
}


// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--
var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) { // index = 9  8 
    var char = str.charAt(index);
    reverseString = reverseString.concat(char); 
}
console.log(reverseString);


function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}
reverseWord("Google Chrome");
reverseWord("Developer");

