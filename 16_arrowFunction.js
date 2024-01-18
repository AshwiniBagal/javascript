//1 Arrow Function with no arguments and no return value

const show = () => {

    console.log(`Inside Arrow Function with no arguments and no return value `);

}

show();

 

//2 Arrow Function with arguments and no return value

const add = (num1, num2) => {

    console.log(`Addition is: ${num1+num2}`);

}

add(10, 40);

 

//3 Arrow Function with arguments and return value

const multiply = (n1, n2) => {

    return n1*n2;

}

const returnValue = multiply(5, 5);

console.log(`Multiplication is: ${returnValue}`);

console.log("==========================================");

// Write a arrow function with input value 'JavaScript' and will return the total number characters 

const charCount = (str) => {
   let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        count++;
        
    }
    return count;

}

const returnStr  = charCount("Javascript");

console.log(`Total characters in String are: ${returnStr}`);


console.log("==========================================");
// Write a arrow function with input value 'JavaScript' and will return the total number characters 

const charCount1 = (str1) => {
     
     return str1.length;
 
 }
 
 const returnStr1  = charCount1("Javascript");
 
 console.log(`Total characters in String : ${returnStr1}`);

console.log("==========================================");
// Write a arrow function with input value 'JavaScript' and will return the total number characters 

 const charCount2 = (str2) => {

    let char = str2.split("") 
    return char.length;

}

const returnStr2  = charCount2("Javascript");

console.log(`Total characters in String : ${returnStr2}`);
