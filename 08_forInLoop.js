console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}