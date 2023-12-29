 
 function stringHondsOn(){
 var msg =   "    Hey you are doing good, keep it up    ";
console.log(`Given String is: ${msg}`);
console.log(`Length of string is: ${msg.length}`);
var trm = msg.trim();
console.log(`After trim given string is: ${trm}, And I'ts length is: ${trm.length}`);
var extraSpaces = msg.length - trm.length;
console.log(`Total number of extra spaces are: ${extraSpaces}`);
console.log(`First character is: ${trm[0]} , And Last  character is: ${trm[trm.length-1]}`);

var result = trm.split(" ");
console.log(`Total words in string is: ${result.length}`);

var indexOfgood = trm.indexOf('good');
console.log("Index of good is: ", indexOfgood);

var subString22 = trm.substring(22);
var sliceString22 = trm.slice(22);
console.log(` substring starting from index 22: ${subString22}`);
console.log(`Slice starting from index 22: ${sliceString22}`);

var isEndsWithup = trm.endsWith("up");
console.log(` Is string ends with word "up": ${isEndsWithup}`);

var isStartWithHey = trm.startsWith("Hey");
console.log(` Is string starts with word “Hey”: ${isStartWithHey} `);

 }
 stringHondsOn();
