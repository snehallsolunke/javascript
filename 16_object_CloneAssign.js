
const Arr=[20,3,4,56,90,400,49];
const Arr2=Arr; //shallow clone of Arr
console.log(`Given Arr is: ${Arr}.`);
console.log(`Shallow Cloned array is: ${Arr2}.`); //
Arr2.push(55,66);
console.log(`Shallow Cloned array after Push is: ${Arr2}.`); //
console.log("");

const dpcln=[...Arr];// deep clone using spread operator.
console.log(`Deep Cloned array is: ${dpcln}`); //
dpcln.push(10,25);

console.log(`Deep Cloned array after Push is: ${dpcln}.`); //
console.log(`Given array after Deep Clone is: ${Arr}.`);

console.log("");
const evn=[2,30,14,8];
console.log(`Given Arry ${Arr}`); //
console.log(`Even Array: ${evn}`);
const concat= [...evn,...Arr];
console.log(`Concated array is: ${concat}`);

console.log(``);

const employee_info={ // object created
    emp_id: 27,       // object properties
    emp_name:`John Smith`,
    salary:{           // nested object
        july:`40,0000 INR`, // nested object properties
        aug: `50,0000 INR`,
        jun: `65,0000 INR`
    },
    address: { // nested object 
        locality: {
            colony:"Hyde Park",
            street:"Wall Street"
        },
        city: `New York City`,
        state: "NY",
        country: "United State"
    },
    mobiles:[`+1 344 1234`, `+7 212 790 8903`, `+49 234 5231`]
 };
console.log(`Employee Address is: ${employee_info.address.locality.colony},${employee_info.address.locality.street},${employee_info.address.city},${employee_info.address.state},${employee_info.address.country}` );
console.log()


// console.log(JSON.stringify());

