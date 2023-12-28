
console.log("========================Step 1=======================");
function square(num) {
    console.log("Given value is:", num);
    var res = num * num;
    console.log("Result is: ", res);
}
square(9);//function call or Invocation
square(11);
square(25);
square(1023);

console.log("===================================step 2=============================");
function multiply(n1, n2, n3) {
    console.log("Given number are:", n1, n2, n3);
    var res = n1 * n2 * n3;
    return res;
}

var result = multiply(5,5,5);
console.log(result);
var result = multiply(6,6,6);
console.log(result);

console.log("===================================step 3=============================");
function swap(n1,n2){
    console.log("Before swap:", "n1:", n1 , "n2:", n2 );
    var temp =n1; 
    n1=n2;
    n2 = temp;
    console.log("After Swap: ", "n1:", n1, "n2:" , n2);
}
swap(100, 200);
swap("Jenny", "Menny");
