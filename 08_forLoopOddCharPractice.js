
var string1 = "Hard work always pays back";
var string2 = "Soon I will be Angular IT Champ";

var odd=""; var spaces=" "; 
function string(s){
    var s1=s.split(" ");
for(var i=0; i<s1.length; i++){
    var w=s1[i];
    for(var j=0; j<w.length; j++){
        if (j%2 !== 1 ) {
          odd=odd+w[j]+spaces;
        }
    }
}
console.log(`    odd chars are:"${odd}"`);
odd="";
}
console.log(`Given string is:"${string1}"`);
string(string1);
console.log(`Given string is:"${string2}"`);
string(string2);


