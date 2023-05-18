function squareOfWordLength(string) {
   console.log('Given Word:',string);
   let l = string.length;
   let square= l*l;
   console.log(`Length of Word: ${l} Square of it's Length: ${square} `);
   return square;
}
squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("");

function Name(){
    string1="I am Angular Developer";
    console.log('Given String:',string1);
    var L=string1.length;
    var WordsCount= string1.split(" ");
    var N=WordsCount.length;
    console.log(`String length:${L}, No. of words: ${N}, Result (StringLength/No. of Words):${L/N}`);
    console.log(`String length:${L}, No. of words: ${N}, Result (StringLength*No. of words):${L*N}`);
}
Name( );