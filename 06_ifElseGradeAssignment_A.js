function eligibility(age, name){
    console.log(`Hey '${name}' Your Entered Age is:${age},` )
    if(age <=0 || age>120 || age==undefined){
        console.log(` - Invalid data, please Enter valid age.`);
    }
    else if(age >0 && age<18){
        console.log(" - You are not Eligible for Voting.");
    }
    else if(age>=18 && age<=120){
        console.log(" - You are Eligible for Voting.");
    }
}
var x;
eligibility(45, `Sam`);
eligibility(17, 'Andrew');
eligibility(8, 'Miranda');
eligibility(20, 'John');
eligibility(-10, `Tim`);
eligibility(200, 'Sophia');
eligibility(x,`Jack`);
eligibility(null, `Helena`);
eligibility();