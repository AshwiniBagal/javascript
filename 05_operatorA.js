console.log("=======================================Step 1====================================");
function squareOfWordLength(str){
    var len = str.length;
    return len * len;
}
var sqr = squareOfWordLength("javaScript");
console.log(`Square of string length is: ${sqr}`);

var sqr = squareOfWordLength("Google Chrome");
console.log(`Square of string length is: ${sqr}`);

var sqr = squareOfWordLength("Developer Smart");
console.log(`Square of string length is: ${sqr}`);
console.log("===================================Step 2========================================");

function strOperations(){
    var str = "I am Angular Developer";
    var len = str.length;
    console.log(`String length is: ${len}`);
    var totalWords = str.split(" ");
    var lenTotalWords = totalWords.length;
    console.log(`Total words available in String is: ${lenTotalWords}`);
    var division = len / lenTotalWords;
    console.log(`Division of String length and total number of words is: ${division}`);
    var multiplication = len * lenTotalWords;
    console.log(`Multiplication of String length and total words available in string is: ${multiplication}`);
}
strOperations();

    