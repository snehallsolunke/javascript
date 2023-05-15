function stringHandsOn(){
    var string='   Hey, you are doing good, Keep it up   ';
   console.log('Given String:-',string);
   var length=string.length;
   var string2=string.trim();
   var length2=string2.length;
   console.log('Trimmed String:',string2);
    console.log('Length before trim:',length);
    console.log('Length after trim:',length2);
  console.log('No. of Spaces removed after trim:',length-length2 );

    console.log('First Letter:', string2.charAt(0),'Last Letter:',string2.charAt(length2-1));
} 
stringHandsOn();  //function invoked
