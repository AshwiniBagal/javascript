
    
function Bank(bankName, location, ifcCode, branchCode){
this.bankName =bankName;
this.location = location;
this.ifcCode =ifcCode;
this.branchCode =branchCode;
this.bankDtails= function(){
    console.log(`Bank Name: ${this.bankName} , Location : ${this.location} , IFCcode: ${ifcCode}, Branch Code : ${branchCode}`);
}

}

const yesBank = new Bank("YES Bank", "Pune" , "yes1011" , 6894 );
yesBank.bankDtails();
const sbiBank = new Bank("SBI Bank", "kalyani nagar" , "sbi1011" , 3748 );
sbiBank.bankDtails();
const mahBank = new Bank("MAH Bank", "Kothrud" , "mah1011" , 4565 );
mahBank.bankDtails();

const axisBank = new Bank("Axis Bank", "Pandharpur" , "axis1011" , 4545 );
axisBank.bankDtails();

Bank.prototype.open_Time = "9 AM IST";
Bank.prototype,close_Time = "6 PM IST"

console.log("==========================================Prototype=================================================");
console.log(` New Added object open time : ${ sbiBank.open_Time} , Added object close time: ${sbiBank.close_Time}` );
console.log(` New Added object open time : ${axisBank.open_Time} , New Added object close time : ${axisBank.close_Time}`);
console.log(`Bank Name: ${yesBank.bankName} , Branch code: ${yesBank.branchCode} , OPen time : ${yesBank.open_Time}`);