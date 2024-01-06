// const country = "India"; //variable declaration and initiolization
// let age ;//variable decla
// console.log(age);
// age = 26;
// var city ;
// city = "Pune";
// console.log(city);

//country = "Bharatjj";
const country = "India"; // Variable declaration and Initialization
let age; // Variable decl.
console.log(age);
age = 32;
var city;
city = 'Pune';
console.log(city);

// country = "Bharath";
console.log(country);

age = 34;
console.log(age);

// Re declaration
// const country = "UK";
// let age = 40;
var city = "Mumbai";

// Scope
if (true) {
   var n1 = 100;
   let n2 =200;
   const n3 = 300; 
}
console.log(n1, "Function scoped");
// console.log(n2);
// console.log(n3);
console.log('Function ');
function show() {
    for (let index = 0; index < 2; index++) {
        var s1 = "S1";
        let s2 = "S2";
        const s3 = "S3";
        
    }
    console.log(s1);
    // console.log(s2);
     //console.log(s3);
}
show();

console.log('=== Reading string char by char====');
let str = "Developer";
for (let index = 0; index < str.length; index++) {
    console.log(str.charAt(index)); 
}

let word = "Developer";
let result = "";
for (let index = word.length-1; index >=0; index--) {
     result = result + word.charAt(index); 
     //result = result.concat(word.charAt(index));
}
console.log(`Reverse string is: ${result}`);

console.log("==================To converting in lower case======================");

let s1 = "Developer UI";
let vowelsCount =0;
for (let index = 0; index < s1.length; index++) {
    let char = s1.charAt(index).toLowerCase();
    if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u') {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Vowels count is: ${vowelsCount}`);