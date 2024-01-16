let professor = {
    firstName: "Ashwini Bagal",
    emali : "abc123@gmail.com",
    subject:"Web Technology",
    designation:"Associate Professor",
    address :"Pune",
    degrees: {
           Engineering:"CSC",
           BSc:"Digital Marketing and Web Technologies",
           MSc:"User Experience (UX) Design",
           PHD:"Adv Computing",
    },
    certificates:["Hacker Rank Certificates" , "Certificates in IFE course" , "Certificates in Adv programming"],
    
    
};
console.log("=======================Step 1===Added properties=========================");
console.log(professor);

console.log("=======================Step 2==Added nested object degrees==========================");
console.log(professor.degrees);

console.log("=======================Step 3==Added Array==========================");
console.log(professor.certificates);

console.log("=======================Step 4===Added new property=========================");;
professor.totalExperience ="14 years";
console.log(`New property is added totalExperience: ${professor.totalExperience  }`);
console.log("=======================Step 5====Updated Value========================");
professor.address = "Pandharpur";
console.log(`Address is updated Pune to Pandarpur: ${professor.address}`);
console.log("=======================Step 6===Added new certificate at 2nd index=========================");

professor.certificates.splice(2,0,"Oracle certified");
console.log(professor.certificates);
console.log("=======================Step 7==Last element of array==========================");
console.log(`Last element in array is:${professor.certificates[professor.certificates.length-1]}`);
console.log("=======================Step 8===log complete object=========================");
console.log(professor);
console.log("=======================Step9===log Array: certificates=========================");
for (const iterator of professor.certificates) {
    console.log(iterator);
    
}
