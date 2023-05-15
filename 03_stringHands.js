function stringHandsOn(){
    var string='   Hey, you are doing good, Keep it up   ';
   console.log('1. Given String:',string);
   var length=string.length;
   var string2=string.trim();
   var length2=string2.length;
   
    console.log('2. Length before trim:',length);
    console.log('3. Trimmed String:',string2);
    console.log('   Length after trim:',length2);
    console.log('4. No. of Spaces removed after trim:',length-length2 );
    console.log('5. First Letter:', string2.charAt(0),', Last Letter:',string2.charAt(length2-1));

    var spaces=0;
    for (var i = 0; i < length2; i++) {
        if (string2.charAt(i) ==' ') {
                    spaces++;
                }
            }
            words=spaces+1;
    console.log('6. Number of words in string:', words);
    console.log('7. index of word "good" :', string2.indexOf("good"));
    var sbstrg1= string2.slice(25,length2);
    console.log('8. substring from index 25_slice:',sbstrg1);
    var sbstrg2= string2.substring(25,length2);
    console.log('8. substring from index 25_substring:',sbstrg2);
    console.log('9. String starts with_UP ? :', string2.startsWith("up"));
    console.log('10. String starts with_Hey? :', string2.startsWith("Hey"));
} 
stringHandsOn ();
