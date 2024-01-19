

console.log("==========================Step 1========================");
const arrayNumbers = [1, -7, 40, 502, -77 ,91, 0, 108, 89, -601]

//log the array elements with its index using forEach with arrow function

arrayNumbers.forEach(( index , element) =>{
    console.log( ` Index: ${element}  Element: ${index}`);

});

console.log("==========================Step 2========================");

//Find the positive numbers and log on console  (a) using forEach with arrow function.

let array = [];

arrayNumbers.forEach((element) =>{
if (element >0) {
   array.push(element);    
}
});
console.log(array);


console.log("==========================Step 3========================");

//Find negative numbers , add into new array and log the new array on console using arrow function

let negativeArray = [];

arrayNumbers.forEach((element) =>{
if (element <0) {
    negativeArray.push(element);    
}
});
console.log(negativeArray);

console.log("==========================Step 4========================");

//find even numbers and log on the console using forEach with arrow function.

let evenArray = [];

arrayNumbers.forEach((element) =>{
if (element % 2 ==0) {
    evenArray.push(element);    
}
});
console.log(evenArray);

console.log("==========================Step 5========================");

//Find sum of all elements in arrayNumbers and log one the console.

let sum =0;

arrayNumbers.forEach((element) =>{
if (element) {
    sum = element + sum;   
}
});
console.log(`Sum of all elements : ${sum}`);

console.log("==========================Step 6========================");

//LOg only even indexed array value on console.using forEach with arrow function.


let evenIndex = [];
arrayNumbers.forEach((element , index) =>{
if (index % 2 == 0) {
    evenIndex.push(element);
    
}
});
console.log(evenIndex);



