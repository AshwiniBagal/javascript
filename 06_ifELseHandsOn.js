
console.log("======================================Step 1=====================================");var isEvenOrOdd = function (num) {
    var returnValue =""; 
    if (num % 2 == 0){
       returnValue =  "Even";
    }else{
        returnValue =  "Odd";
    }
    return returnValue;
};
var res = isEvenOrOdd(45);
console.log(`45 Given number is ${res}`); 

var res = isEvenOrOdd(70);
console.log(`70 Given number is ${res}`);

var res = isEvenOrOdd(67);
console.log(`67 Given number is ${res}`);
var res = isEvenOrOdd(98);
console.log(`98 Given number is ${res}`);

console.log("======================================Step 2=====================================");

var isEligibleForVote = function(num1){
var age =18;
if (num1>=age) {
    console.log(`Age is ${num1} so, this person is eligible for vote` );
    
} else {
    console.log(`Age is ${num1} so, this person is not eligible for vote.`);
}
}
 
isEligibleForVote(18);

 isEligibleForVote(20);

 isEligibleForVote(17);

 isEligibleForVote(40);

 console.log("==============================step 3=================================");
  var checkCharacterLen = function(str){
    var len = str.length;
    if(len>=10){
       console.log(`Given String "${str} "Contain more than 10 characters.`);
    }

  }
  checkCharacterLen("JavaScript-ES6")

console.log("==============================step 4=================================");

var checkStart = function(word){
    if(word.startsWith("Java")){
        console.log(`Given word ${word} starts with "Java"`);
    }else{
        console.log(`Given Word ${word }  does not start with "Java"`);
    }
}

checkStart("JavaScript language")