console.log("1. Square of Numbers using Function Expression");
function square(x) {
    var x;
    var square = x*x;
    console.log('Square of',x,'is:',square);
    return square;
}
square(4);
square(9);
square(28);
square(96);

console.log('2. Type of function square is :',typeof square);

function Reactangle (width, length){
    var rectangleArea = width*length;
    console.log('3. Area of Rectangle Plot',width,'x',length,'is:',rectangleArea);
    return rectangleArea;
}
Reactangle(40,50);

console.log('4. Swap Values');
function swap(x, y) {
    console.log('  Values before swap:', x , y);
    var swapvalues = x;
    x = y;
    y = swapvalues;
    console.log('  Values after swap:', x, y);
}
swap(2000,4000);
swap('Large','Tiny');
console.log('');

function Demo(){
    var string = 'JS the most popular language of Internet';
    console.log('5. Given String; ',string);
    console.log('  a. Total characters in string:', string.length);
    console.log('  b. Character at index 6:', string.charAt(6));
    console.log('  c. Character at index 11:', string.charAt(11));
    console.log('  d. Last character in string:', string.charAt(string.length -1));
    console.log('  e. First character in string:', string.charAt(0));
    var words=0;
    var spaces=0;
    for (var i = 0; i < string.length; i++){
    if (string.charAt(i) ==" "){
       spaces++;
    }
   }
   words=spaces+1;
   console.log('  f. Total words in string:', words);
}

Demo();

