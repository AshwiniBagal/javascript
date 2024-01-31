function shallowClone(){
    const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const arrayNums2 = arrayNums;
arrayNums2.push(55,65);
//arrayNums2.push(65);
console.log(arrayNums);
console.log(arrayNums2);
}

shallowClone();
console.log("=========================Step 2===========================");
function deepClone(){
    const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const arrayNums2 = [...arrayNums];
arrayNums.splice(4,0,10,25);
//arrayNums.splice(5,0,25);
console.log(arrayNums);
console.log(arrayNums2);
}
deepClone();
console.log("=========================Step 3===========================");
function meargingArray(){
    const arrayNums = [20, 3, 4, 56, 90, 400, 49];
    const arrayEven=[2,30,14,8];

    const mearging = [...arrayNums, ...arrayEven];
    console.log(mearging);
}
meargingArray();
console.log("=========================Step 4===========================");

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR"
    },
    address: {
    locality: {
    colony: "OM Vrindavan Society", street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"]
    }
console.log(employee_info);

    console.log("=========================Step 5===========================");

    const addr = employee_info.address;
    console.log(addr);

    const moNo =employee_info.mobiles;
    console.log(moNo);

console.log("=================Step 6========================");
const newArray =  JSON.parse(JSON.stringify(employee_info));

console.log(`Before update Salary is: ${newArray.salary.july_month}`);
newArray.salary.july_month = "80000INR";
console.log(`Cloned object Updated value:${newArray.salary.july_month}`);

console.log(`Before update country is: ${employee_info.address.country}`);
employee_info.address.country = "United Kingdom";

console.log(`Original object Updated Value:${employee_info.address.country}`);
// console.table(employee_info);
// console.table(newArray);