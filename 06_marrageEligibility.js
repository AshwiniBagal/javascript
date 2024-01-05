var isEligibleFOrMarrage = function(gender,age) {
    
    if (gender==="Male" && age>=21) {
        console.log(`Age ${age} eligible for marriage`);
        
    } else if (gender==="Female" && age>=18) {
        console.log(`Age ${age} eligible for marraige`);
    }
     else if(gender==="Other" && age>=21)   
     {
        console.log(`Age ${age} is not eligible for Marriage`);
     }
    else{
        console.log(` Age ${age} not eligible for marraige`);

    }
}
isEligibleFOrMarrage("Male", 17);
isEligibleFOrMarrage("Male", 25);
isEligibleFOrMarrage("Female", 28);
isEligibleFOrMarrage("Female", 16);
isEligibleFOrMarrage("Other", 35);
isEligibleFOrMarrage("Other", 41);
