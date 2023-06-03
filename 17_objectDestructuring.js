console.log(`============ Object Destructuring =============`);
const student = {
    name: "Stew",
    age: 57,
    country: "US",
    pin: 223312,
    rollNo: 111,
    college: "COEP Pune",
    marks: "90%",
    degree: "BE CSE"
}
// const rollNo = student.rollNo;
// const name = student.name;
// const college = student.college;
// const degree = student.degree;
// const country = student.country;

const {rollNo,name, college, degree, country } = student;

const { pin, age, isMarried=false } = student;  // const pin = student.pin;
console.log(pin, age, isMarried);

const arr = [11, 22, 33];
const [element1, element2, num1, num2=0] = arr;
console.log(element1, element2, num1, num2);