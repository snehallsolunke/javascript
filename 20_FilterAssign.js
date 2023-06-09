class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
array_employees.length

const wipro_wale=array_employees.filter((employee) => {
    return employee.emp_company == "Wipro";
});
const wipro_emp=wipro_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`1. Employees working in Wipro Company: ${wipro_emp} `);

console.log(``);

const IT_HR_wale=array_employees.filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept== "HR";
});
const IT_HR_emp=IT_HR_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`2. Employees working in "IT"  OR "HR" Dept: ${IT_HR_emp} `);

console.log(``);

const ID_50_wale=array_employees.filter((employee) => {
    return employee.emp_id >50; 
});
const ID_50=ID_50_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`3. Employees having ID greater than 50: ${ID_50} `);

console.log(``);

const AVM_initials_wale=array_employees.filter((employee) => {
    if (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")){
        return employee.emp_name;
    }
});

const AVM_initials =AVM_initials_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`4. Employees having AVM_initials: ${AVM_initials} `);

console.log(``);

const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sumSalary =empSalaries.reduce( (Total, value) => {
    return Total+value;
});
const No_of_emp=(array_employees.length);
console.log(`5. Total sum of salaries: ${sumSalary}, No of employees : ${No_of_emp}`);

const avg=(sumSalary/No_of_emp);
const avg2=Math.round(avg);

console.log(`   Average of salary of all employees is: ${avg2}`);

console.log(``);

const IT_Salary_Wale= array_employees.filter( (employee) => {
    return employee.emp_dept === "IT";

})

const IT_Salaries = IT_Salary_Wale.map( (employee) => {
    return employee.emp_salary;
});

const Salary =IT_Salaries.reduce( (Total, value) => {
    return Total+value;
});
const No_of_IT_emp=(IT_Salary_Wale.length);
console.log(`6. Total sum of IT salaries: ${Salary} No of IT employees : ${No_of_IT_emp}`);

const IT_avg=(Salary/No_of_IT_emp);
const IT_avg2=Math.round(IT_avg);

console.log(`   Average of salary of IT employees is: ${IT_avg2}`);