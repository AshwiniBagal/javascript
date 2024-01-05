var tcsEligibilityCriteria  = function(gradScore, hscScore, sscScore, candidateName){
if(gradScore >=70|| hscScore >=80 || sscScore >= 90){
    console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
}
else{
    console.log(`${candidateName}  Unfortunatly you are not eligible for interview`);
}
}

tcsEligibilityCriteria(80,86,90,"Ashwini Bagal");
tcsEligibilityCriteria(70,65,55,"Madhura Jagtap");
tcsEligibilityCriteria(60,79,88,"Aayesha Shaikh ");