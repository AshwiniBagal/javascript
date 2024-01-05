var isEligibleFOrMarrage = function(gender , age){
    if (age<0 || age >200 || age==undefined || isNaN(age) || gender != "male" || gender != "Female") { // Invalid Input

        console.log(` Invalid Input...`);
    }

        else{

    if(gender =="Male" && age>=21 || gender == "Female" && age >=18){
        console.log(`You are eligible for marrage`);
    }
    else{
        console.log(`You are not eligible for marrage`);
    }
}
}

isEligibleFOrMarrage("Male", 17);
isEligibleFOrMarrage("Male", 25);
isEligibleFOrMarrage("Female", 28);
isEligibleFOrMarrage("Female", 16);
isEligibleFOrMarrage("Other", 35);
isEligibleFOrMarrage("Other", 41);
