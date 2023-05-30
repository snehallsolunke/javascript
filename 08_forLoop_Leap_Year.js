function Year(Y){
    
    if(Y % 4==0 && Y % 100)||(Y % 400){
            console.log(`Entered Year:${Y} is a Leap Year.`);
        }
        else{
            console.log(`Entered Year:${Y} is not a Leap Year`);
        }
      
    
}
