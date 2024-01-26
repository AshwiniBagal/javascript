const arrayRollNumbers = [ 113, 45, 56,11,32, 453,109 ,799,56, 45];
console.log("=================Reversed Array===========================");
const reversArray = arrayRollNumbers.reverse();

console.log(reversArray);

console.log("==============. Useing sort() method ======================");

const sortArray = arrayRollNumbers.sort();
console.log(sortArray);
console.log("==============Sorting the array in ascending order======================");
arrayRollNumbers.sort((a,b) => {
    return a>b ? 1:-1;
});
console.log(arrayRollNumbers);
console.log("===============Gratest number of array is=====================");

const greatestNo =arrayRollNumbers[ arrayRollNumbers.length-1];
console.log(greatestNo );
console.log("===============Smallest number of array is=====================");
const smallest =arrayRollNumbers[0];
console.log(smallest);

console.log("===============Remove duplicates from array=====================");


const uniqueNumbers =arrayRollNumbers.filter((value, index, self)=>{
return self.indexOf(value) ===index;
});

console.log(uniqueNumbers);