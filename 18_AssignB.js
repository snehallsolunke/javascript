class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const anil = new Employee(22, "Anil", "IT", 50000, "TCS"); //
  const radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

  const array_employees = [anil, radha, rishi, sonali, monika, vinayak, mahesh];
// 1. Employees working in "TCS"  their Names and Company.
console.log("==   1. Employees working in `TCS`  their Names and Company.  ==");

array_employees.forEach((emp) => {
  if (emp.emp_company === "TCS") {
    console.log(`Name: ${emp.emp_name}, Company: ${emp.emp_company}`);
  }
});
console.log("");

// 2. Find the 'Finance' department employees, log only department and employee name on console
console.log("==   2. Employees working in finance dept, their Name and dept.  ==");             

array_employees.forEach((emp) => {
  if (emp.emp_dept === "Finance") {
    console.log(`Department: ${emp.emp_dept}, Name: ${emp.emp_name}`);
  }
});
console.log("");

// 3. Find the employees whose name starts with 'R' and log complete employee details on console
console.log("==   3. Employees whose name start with `R` and its details.  ==");  

array_employees.forEach((emp) => {
  if (emp.emp_name.startsWith("R")) {
    console.log(emp);
  }
});
console.log("");

// 4. Find the employees whose salary is greater than 75000, and log emp name, company, and salary on console
console.log("==   4. Employees whose Sal. is greater than 75,000 their Name, company and Salary.  =="); 

array_employees.forEach((emp) => {
  if (emp.emp_salary > 75000) {
    console.log(`Name: ${emp.emp_name}, Company: ${emp.emp_company}, Salary: ${emp.emp_salary}`);
  }
});
console.log("");
// 5. Find the employees with salary greater than or equal to 50000 and from the 'IT' department, log complete employee details on console
console.log("==   5. Employees whose Sal. is >= 50,000 & is from IT dept their details.  =="); 

array_employees.forEach((emp) => {
  if (emp.emp_salary >= 50000 && emp.emp_dept === "IT") {
    console.log(emp);
  }
});
console.log("");
// 6. Find all the employees from the company "Infosys" and log complete employee details on console
console.log("==   6. All the employees from Infosys and their details.  =="); 

array_employees.forEach((emp) => {
  if (emp.emp_company === "Infosys") {
    console.log(emp);
    }
  });


