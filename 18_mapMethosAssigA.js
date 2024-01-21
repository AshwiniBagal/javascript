const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("====================Step 1======================")
//Add 10 into each element and log new array on console

const arrayAdd10IntoEle = arrayNumbers.map((element)=>{
    return element +10;
});
console.log(`After adding 10 into each element:`);
console.log(arrayAdd10IntoEle);

console.log("====================Step 2======================")

const cubEachElement = arrayNumbers.map((element) => {
    return element**3;
});
console.log("Cub of each element:");
console.log(cubEachElement);

console.log("====================Step 3======================")
const addIndexValue = arrayNumbers.map((element , index)=> {
  return index + element;
});
console.log("After adding index value into its corresponding array element:");
console.log(addIndexValue);
