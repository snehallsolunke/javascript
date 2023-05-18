console.log("1. Male Marriage Eligibility Check:");
console.log("");
function check1(Name, Age, Gender) 
{
    console.log(`   Name: ${Name} Age: ${Age} Gender: ${Gender}`);
    var result = Age>=21 && Gender=='Male' ? `   Hey ${Name} you are eligible for Marriage.` : `   Hey ${Name} you are Not eligible for Marriage`;
    return result;
}

console.log(check1(`James`, 29, `Male`) );
console.log(" ");
console.log(check1(`Mathew`, 17, `Male`) );

console.log("***************************************************");


console.log("2. Female Marriage Eligibility Check:");
console.log("");
function check(Name, Age, Gender) 
{
    console.log(`   Name: ${Name} Age: ${Age} Gender: ${Gender}`);
    var result = Age>=18 && Gender=='Female' ? `   Hey ${Name} you are eligible for Marriage.` : `   Hey ${Name} you are Not eligible for Marriage.`;
    return result;
}


console.log(check(`Sophia`, 16, `Female`) );
console.log(" ");
console.log(check(`Linda`, 27, `Female`) );