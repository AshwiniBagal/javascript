
console.log("========================Log first and last element==========================");
const fruits_seasonal = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log(`First Element is: "${fruits_seasonal[0]}" And last element is: "${fruits_seasonal[fruits_seasonal.length-1]}"  `);

console.log("=========================Add Papaya before Banana=====================");
console.log("Original Array");
console.log(fruits_seasonal);

fruits_seasonal.unshift("Papaya");
console.log("Updated Array");
console.log(fruits_seasonal);

console.log("====================Remove Mango from the rray=========================");

const fruits = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log("Original Array:");
console.log(fruits);
fruits.splice(3,1);
console.log("After removing Mango:");
console.log(fruits);

console.log("==================Add pineapple at last position======================");

const fruits_array = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log("Original Array:");
console.log(fruits_array);
fruits_array.push("Pineapple");
console.log("Pinapple added at last");
console.log(fruits_array);

console.log("===================Insert dragon fruit before Water Melon===============");

const fArray = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log("Original Array:");
console.log(fArray);
fArray.splice(4, 0,"Dragon Fruit");
console.log("After Inserting dragon fruit before Water Melon");
console.log(`After Adding Dragon Fruit: ${fArray}`);

console.log("======================Replace element Orange with kiwi================");

const array_fruit  = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log("Original Array:");
console.log(array_fruit);
array_fruit.splice(1, 1, "Kiwi");
console.log("After Replacing element Orange with kiwi");
console.log(array_fruit);

console.log("=====================Log element from 1 to 4=================");
const arr = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log("Original Array:");
console.log(arr);

let slice1to4 = arr.slice(1,5 );
console.log("Elements from 1 to 4");
console.log(slice1to4);

console.log("====================Select last 3 elements=======================");

const array = ["Banana" , "Orange" , "Apple", "Mango" , "Water Melon"];
console.log("Original Array:");
console.log(array);

let sliceLast3 = array.slice(2 );
console.log("Last 3 elements");
console.log(sliceLast3);


