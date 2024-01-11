const sbiBank = {
    BranchName: "Korti",
    account_type:"Savings",
    //overdraft_limit:500.00,
    account_status:"Active",
    branch_code:"SBI123",
    //credit_score:750

}

const bankLocation={
    street: "Wakad",
    city:"Pune",
    pin:411057
}

const rateOfInterest ={
    homeLoanInterest:"8.40% p.a",
    personalLoanInterest:"7.60% p.a",
    dueInterest:"9.50% p.a"
}
console.log("===============================Step 1==Object created sbiBank================================");
console.log(sbiBank);

console.log("===============================Step 2==Object created bankLocation================================");

console.log(bankLocation);

console.log("===============================Step 3==After cloninig Step 1 and Step 2================================");

const newObject = Object.assign({} , sbiBank, bankLocation);
console.log(newObject);
//console.log(JSON.stringify(newObject, null, 2));
console.log("===============================Step 4==Object created rateOfInterest================================");
console.log(rateOfInterest);
console.log("===============================Step 5===Merge Step 1, Step 2 and Step 4===============================");
const sbiDetails = Object.assign({} , sbiBank, bankLocation, rateOfInterest);
console.log(sbiDetails);


console.log("===============================Step 6==After Traversing of merge object is:================================");

for (const key in sbiDetails) {
        console.log(`${key}  ==> ${ sbiDetails[key]}`);
    }
