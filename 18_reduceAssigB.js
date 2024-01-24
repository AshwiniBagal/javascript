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



console.log("=======================Step 1===Employees from Wipro company:===========================");
//find all the employees from Wipro company.

const array = arrayEmployees.filter( (element) => {

    return element.emp_company == "Wipro";

});

array.forEach(element => {
    console.log(`Employee Name:${element.emp_name}  , Employee Company: ${element.emp_company}`);
});

console.log("=============Step 2===Employees from IT or HR department:=====================");
//find the employees from IT or HR department.
const array1 = arrayEmployees.filter( (element) => {

    return element.emp_dept == "IT" || element.emp_dept == "HR";

});

array1.forEach((element) => {
    console.log(`Employee Name:${element.emp_name}  , Employee Company: ${element.emp_dept}`);
});

console.log("==============Step 3====Employee whose emp_id is greater than 50 ======================");

//Find all employee whose emp_id is greater than 50
const array2 = arrayEmployees.filter( (element) => {

    return element.emp_id > 50;

});

array2.forEach((element) => {
    console.log(`Employee Id : ${ element.emp_id}, Employee Name:${element.emp_name} `);
});

console.log("==============Step 4====Employees whose name statr with letter A , M and V =====================");
//Find all employees whose name statr with letter "A" , "M" and "V"

const array3 = arrayEmployees.filter( (element) => {

    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M");

});

array3.forEach((element) => {
    console.log(` Employee Name:${element.emp_name} `);
});

console.log("============================== Step 5===================================================");
//Find the Avg salary of the Employee for all the department

const arraylength = arrayEmployees.length;
//console.log(arraylength);

const sumOfSalary = arrayEmployees.reduce( (tr, element) => {

    return tr + element.emp_salary;

},0);

//console.log(`${sumOfSalary}`);

const avgSalary = sumOfSalary/arraylength;
console.log(`Avg salary of the Employee for all the department:${avgSalary}`);

console.log("============================== Step 6 ===================================================");

//Find the Avg Salary for IT department.

const array5 = arrayEmployees.filter((element) => {
    return element.emp_dept == "IT";
});
const lengthOfArray5 = array5.length; 
const sumOfITSalary = array5.reduce((salary , element) => {

    return salary + element.emp_salary;

},0)

//console.log(sumOfITSalary);

const avgITSalary = sumOfITSalary/lengthOfArray5;
console.log(`Avg Salary for IT department:${avgITSalary}`);

