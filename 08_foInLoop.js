let array = [11, 22, 33, 44, 55, 66, 77];

console.log(`Traversing an array using for in loop..`);
let sum = 0;

for (const index in array) {

    console.log(array[index]);
    sum = sum + array[index];
}
console.log(`Sum of array element:, ${sum}`);


// sir in this line (const element of arrayNum)
//  we are updating the value of
//  element in each iteration but we have created the
//   variable using const, which is immutable.
//so why we are not getting any error?

let arrayNum = [4, 5, 6, 7, 3]
console.log(`Traversing an array using for of loop..`);
let add = 0;
for (const element of arrayNum) {

    console.log(element);
    add = add + element;
}
console.log(`Sum of array element:, ${add}`);



console.log(`==== WAP to count the vowels from the given string=======`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}
console.log(`Vowels count is: ${count}`);


let arrayOfFriends = ["Jenny", "Elon", "Bill"];
const result = arrayOfFriends.join(",");
console.log(typeof result);
console.log(result);

arrayOfFriends.reverse();

console.log(arrayOfFriends);



const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);
const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);




let array1 = ["Jenny", "Menny", "Bill"];
// Spread Operator ...
console.log(array1); // ['Jenny', 'Menny', 'Bill']
console.log(...array1); // Jenny Menny Bill
const newArray = [...array1];
console.log(newArray);