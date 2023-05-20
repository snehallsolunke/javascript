function grade(mark){
    if(mark >=90 && mark<=100){
        console.log(`Fantastic! You got:${mark} Marks, you received A+ Grade.`);
    }
    else if(mark>=75 && mark<90){
        console.log(`Excellent! You got:${mark} Marks, you received A Grade.`);
    }
    else if(mark>=50 && mark<75){
        console.log(`Good! You got:${mark} Marks, you received B Grade.`);  
    }
    else if(mark>=35 && mark<50){
        console.log(`No Worries! You got:${mark} Marks, you received C Grade, need some Improvement.`);
    }
    else if(mark>0 && mark<35){
        console.log(`Alas! You got:${mark} Marks, you failed try next time.`);
    }
    else if(mark<=0 || mark>100 || mark==null) {
        console.log(`You entered invalid Makrs: ${mark}, Enter Correct Marks. `);
    }
}
    grade(98);  grade(90);  grade(80);  grade(55);  grade(35);  grade(23); grade(0);    grade(150);     grade(-7);
    grade("Eightty");  grade(undefined);     grade(null);


   
    
    
   


