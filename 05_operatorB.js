
console.log("=====================================Step 1===================================");
function greaterNumber( num1, num2){
       var greaternum = num1 > num2? `${num1}`: `${num2}`;
       console.log(`Grater number is:  ${greaternum}`);
}
greaterNumber(10 ,-10);
greaterNumber(800 ,899);

console.log("=====================================Step 2===================================");

function isEvenOrOdd(num){
    var res = num%2==0? `${num} Is Even numbwer.`: `${num} Is Odd number.`
    return res;
}
var res1 = isEvenOrOdd(29);
console.log(res1);
var res1 = isEvenOrOdd(44);
console.log(res1);
var res1 = isEvenOrOdd(0);
console.log(res1);
var res1 = isEvenOrOdd(101);
console.log(res1);

console.log("=====================================Step 3===================================");

function wordLength( str){
var len = str.length;
var res = len%2==0?`"${str}" :Is Having Even length `: `"${str}": Is Having Odd length`;
return res;
}
var res1 = wordLength("Javascript")
console.log(res1);
var res1 = wordLength("Developer")
console.log(res1);
var res1 = wordLength("Google")
console.log(res1);
