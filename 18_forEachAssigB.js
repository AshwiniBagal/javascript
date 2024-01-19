class Emlpoyee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    getDetails(){
        console.log(`Emp Id : ${this.emp_id}, Emp Name: ${this.emp_name}, Emp Dept: ${this.emp_dept}, Emp Salary: ${this.emp_salary}, Emp Company: ${this.emp_company}`);
    }
}
const emp_anil = new Emlpoyee(22, "Anil" , "IT" ,50000, "TCS");
const emp_radha = new Emlpoyee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Emlpoyee(55, "Rishi" , "Finance" , 47000,"TCS");
const emp_sonali = new Emlpoyee(66, "Sonali" , "Finance",45000, "Infy");
const emp_monika = new Emlpoyee(77, "Monika" , "IT", 40000, "Wipro");
const emp_viny = new Emlpoyee(88, "Vinayak" ,"IT", 75000, "TCS");
const emp_mahi = new Emlpoyee(99 , "Mahesh", "HR", 85000, "Infy");


const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("==========================Step 1================================");
//FInd out the "TCS " employee details and log only name and company on console.

arrayEmployees.forEach((elements) => {
    if (elements.emp_company=="TCS") {
        console.log(`Employee Name: ${elements.emp_name} , Company Name: ${elements.emp_company}`);
        
    }
    
});

console.log("==========================Step 2================================");
//Find the employee with salary greater than equal to 50000 and log all details of employee.

arrayEmployees.forEach((element)=>{
    if (element.emp_salary >= 50000) {
        console.log(element);     
    }
});

console.log("==========================Step 2================================");
// Find the sum of all employees  salary and log on the console
let sum = 0;
arrayEmployees.forEach((element) => {
    sum = element.emp_salary + sum;    
});

console.log(`Sum of all employees  salary: ${sum} `);

console.log("==========================Step 3================================");
//Find the avarage salary and log on console (AVgSalary = Toatal_Salary / Number_Of_Empllyees)


let avg = 0;
let count = 0;
arrayEmployees.forEach((element) => {
   count++;   
     
});
avg = sum/count;

console.log(`Avarage Salary: ${avg}`);

console.log("==========================Step 4================================");

arrayEmployees.forEach((element) => {
   if ((element.emp_dept == "IT"  || element.emp_dept == "HR" )&& element.emp_salary >=75000) {
    console.log(element);
   }   
      
 });



