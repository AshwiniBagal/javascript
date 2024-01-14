function factorialOfWordsCount(str){
    if (str == null || str == undefined ) {
        return `  ${str} is invalid input...`;
     }  
     
     if (str== "") {
       return `Invalid input ""  string is empty...`
     }
     let strlength = str.split(' ').length;
     
     console.log(`Total words into string are ${strlength}`);
     let factorial = 1;
     for (let index = strlength; index >= 1; index--) {
       
        factorial = index * factorial;
     }
     return ` Factorial of ${strlength} is : ${factorial} `;
}

console.log(" ===============================Assignment 2================================");

let result= factorialOfWordsCount("Revision is mother of success");
console.log(result);

let result3 = factorialOfWordsCount("We never fail, we always leanr, mind it");
console.log(result3);

let result4 = factorialOfWordsCount(null);
console.log(result4);

let result5 = factorialOfWordsCount("");
console.log(result5);

let result6 = factorialOfWordsCount("Ashwini Ramesh Bagal");
console.log(result6);