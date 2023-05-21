console.log("********Count Vowels********");
var str = "I am very good IT Developer";
var char=str.toLowerCase();
var count=0;

for(let index=0; index<=str.length; index++){

  var char1= char.charAt(index);
      if (char1=='a' || char1=='e' || char1=='i' || char1=='o' || char1=='u' ){
        count++;
      }
}
console.log(`Given String is:"${str}"`);
console.log("Total number of vowels:",count);
console.log("here we used toLowerCase() method.");

console.log(`  `);
console.log("********Count Sum of Cubes(1-5)********");

function sumOfCube() {
    var total=0;
      for(let i=1; i<=5; i++){
       var cube=i*i*i;
       total=total+cube;
       console.log("Cube of", i, "is:", cube);
      }
      console.log("Total sum of cubes:",total,".");
    }
    sumOfCube();
    
    
console.log(`  `);
console.log("********Find Odd Positioned chars********");

console.log(`  `);

    // Odd characters
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