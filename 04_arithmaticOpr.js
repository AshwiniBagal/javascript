var n1= 7;
var n2 = 2;
var result = n1 + n2;
console.log(` + ==>  Addition is : ${result}`);
var result = n1 - n2;
console.log(` - ==>  Substraction is : ${result}`);
var result = n1 * n2;
console.log(` * ==>  Multiplication is : ${result}`);
var result = n1 % n2;
console.log(` % ==>  Modulus or Reminder is : ${result}`);
var result = 1280 % 2;
console.log(` % ==>  Modulus or Reminder is : ${result}`);
var result = n1 / n2;
console.log(` / ==>  Division is : ${result}`);
var result = n1 ** 3;
console.log(` ** ==>  Exponention is : ${result}`);
var num = 10;
num += 2; //  num = num + 2;
console.log(`+= Compund Addition is: ${num} `);

var num = 10;
num -= 5; //  num = num - 5;
console.log(`+= Compund Substraction is: ${num} `);
var num = 5;
var result = num % 2;
var resultValue = result == 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

 

var n1 = "100";

var n2 = 100;

var result = n1 == n2 ;

console.log(` Comparision using == operator ==> ${ result } `);

 

 

var result = n1 === n2 ;

console.log(` Comparision using === operator ==> ${ result } `)
var a=10;
var b=a++;
console.log(b);
var c=10;
var d = ++a;
console.log(d);

// var e = 100;
// var f = 100--;
// console.log(f);

// var res = 0/0;
// console.log(res);
console.log("================");
var res1 = 100+false;
console.log(res1);//100

var res1 = 99+true;
console.log(res1);//100

console.log("1" +"1");

//conversion

var s1 = "101";
console.log( typeof s1);

var s2 = +s1;
console.log(s2);
console.log(typeof s2);

var d = +200;
console.log(d);
console.log(typeof d);

var z = +"ash";
console.log(z);

var n = Number("100");
console.log(typeof n);

var s = "200";
var res = Number (s1);
console.log(typeof res);