//function Expression
//FE- storing function inside the varisable
var display = function(){
console.log("Display");
}
display();   //call- function expression

var maileMarriageEligibility = function(gender, age, boyName){
    var result = gender == "male" && age>=21
    ? `Hey ${boyName} you are eligible for Marrage`
    : "Unfortunately - You are not eligible, please try next time."  ;
    console.log(result);
}

maileMarriageEligibility("male", 25, "Billgates");
maileMarriageEligibility("male", 20, "Elon");

 