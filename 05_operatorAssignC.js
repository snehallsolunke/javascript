var Tata= function TCS(Name, Graduation, HSC , SSC){
    var result= Graduation>=70 || HSC>=80 || SSC>=90 ? `Hey ${Name} Congratulations! You are Eligible for TCS Interview.` :
     `Hey ${Name} Unfortunately You are not eligible for TCS Interview.`;
    console.log(result);
}
Tata("Snehal", 80,86,90);
Tata("Michael", 70,65,55);
Tata("Caroline", 60,79,88);