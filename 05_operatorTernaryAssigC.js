
console.log("===============================Step 1==================================");
function maleMarrageEligibility(gender, age ,boyName){
 var eligibility =  gender == "Male" && age>=21
  ? `Hey ${boyName } you are eligible for Marrage.`
  :`Hey ${boyName } you are not eligible for Marrage.`;
  return eligibility;
}
var res = maleMarrageEligibility("Male" , 25 , "Billgates");
console.log(res);
var res = maleMarrageEligibility("Male" , 17, "Stew Jobs");
console.log(res);

console.log("===============================Step 2==================================");

function femaleMarrageEligibility(gender, age ,girlName){
    var eligibility =  gender == "Female" && age >= 18
     ? `Hey ${girlName } you are eligible for Marrage.`
     :`Hey ${girlName } you are not eligible for Marrage.`;
     return eligibility;
   }
   var res = femaleMarrageEligibility("Female" , 16 , "Jenifer");
   console.log(res);
   var res1 = femaleMarrageEligibility("Female" , 27 , "Malinda Gates");
   console.log(res1);
   