function factorialOfNum(num){
    if (num == null || num == undefined ) {
         return `  ${num} is invalid input...`;
      }  
      if (num ==0 || num ==1) {
        return 1;
      }
      if (num < 0) {
        return `Invalid input ${num } is negative number...`
      }

    let mul = 1;
    for (let index = num; index >=1 ; index--) {
      
        mul = index*mul;
    }
    return `The factorial of ${num} is : ${mul}`;
   
}

console.log("============================Assignment 1============================");

let resutl = factorialOfNum(5);
console.log(resutl);

let resutl1 = factorialOfNum(3);
console.log(` ${resutl1}`);

let resutl2 = factorialOfNum(null);
console.log(` ${resutl2}`);

let resutl3 = factorialOfNum(8);
console.log(` ${resutl3}`);

let resutl4 = factorialOfNum(undefined);
console.log(` ${resutl4}`);

let resutl5 = factorialOfNum(9);
console.log(` ${resutl5}`);

let resutl6 = factorialOfNum(0);
console.log(` ${resutl6}`);

