function Year(Y){
    
    if(Y % 4==0){
      if(Y % 100==0){
        if(Y % 400==00){
            console.log(`Entered Year:${Y} is a Leap Year.`);
        }
        else{
            console.log(Entered Year:${Y} is not a Leap Year`)
        }
      }
    }
}
Year(500);