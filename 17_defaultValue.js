function division(num1, num2=1){ // let num1 = 7, let num2;
    if(num2==0){
        num2=1;
    } 
    console.log(num1/num2);
}
division(10, 5);
division(67, 0);
division(7);