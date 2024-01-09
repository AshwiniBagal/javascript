
console.log("===================Step 1=====================");
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const arrayLength = arrayNumbers.length;
console.log(`The total length of array is: ${arrayLength}`);

console.log("===================Step 2=====================");
console.log(`First element of array is: ${arrayNumbers[0]} , And Last element of array is: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log("===================Step 3=====================");
console.log(`Third last element of array is: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log("===================Step 4=====================");
let evenNo = [];
for (const num of arrayNumbers) {
   
    if (num % 2 == 0) {
       evenNo.push(num);
    }
    
}

console.log(`Even number of array: ${evenNo}`);

console.log("===================Step 5=====================");

let oddNum = [];
for (const oddNo of arrayNumbers) {
    if (oddNo % 2 != 0) {
       
        oddNum.push(oddNo);
    }
    
}
console.log(`Odd number of array: ${oddNum}`);

console.log("===================Step 6=====================");
let EvenNosum = 0;
for (const num1 in arrayNumbers) {
  
   if (num1 % 2 == 0) {
    EvenNosum =arrayNumbers[num1] + EvenNosum;
    
   }
   
}
console.log(`Sum of even positioned elements is : ${EvenNosum}`);


console.log("===================Step 7=====================");
let OddNosum = 0;
for (const sumOfOdd in arrayNumbers) {
  
   if (sumOfOdd % 2 != 0) {
    OddNosum = arrayNumbers[sumOfOdd] + OddNosum;
   } 
}
   console.log(`Sum of odd positioned element is : ${OddNosum}`);
   

console.log("===================Step 8=====================");
let sum =0;
for (const sumOfAllEle of arrayNumbers) {
   sum = sumOfAllEle + sum;

    
}
console.log(`Sum of all elements in an array: ${sum}`);

console.log("===================Step 9=====================");

let mulOf5 = [];
for (const mul5 of arrayNumbers) {
    if (mul5 % 5 ==0) {
        
        mulOf5.push(mul5)
    }
    
}
console.log(`The number multiple of 5: ${mulOf5}`);

console.log("===================Step 10=====================");
console.log(`Is 115 available in array: ${arrayNumbers.includes(115)} `);

console.log("===================Step 11=====================");
console.log(`Is 23 available in array: ${arrayNumbers.includes(23)} `);

console.log("===================Step 12=====================");

let addNos = arrayNumbers.splice(3,0,55,66);
console.log(`After adding 55 ,66 at index 3:${arrayNumbers}`);

console.log("===================Step 13=====================");

let deletNos = arrayNumbers.splice(4 ,3);
console.log(`After deleting 3 numbers from index 4: ${arrayNumbers}`);