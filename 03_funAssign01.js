console.log("=================================Step 1=================================");
function add(){
    var n1 =10;
    var n2 =20;
    var res = n1+n2;
    console.log("Addition of two numbers:", res); 
    }
 add();

 function findReminder(){
    var n1 =56;
    var n2 =50;
    var res = n1%n2;
    console.log("Reminder 0f ", n1 + " %", n2 + " is: ",  res); 
 }
 findReminder();
console.log("=================================Step 2=================================");

function personalDetails(fName, lName, clgName){
    console.log("First Name:", fName + "Last Nmae:",lName + "College Name:", clgName );

}
personalDetails("Ashwini ", "Bagal "," Karmayogi Engineering College");

console.log("=================================Step 3========================================");
function swapValues( val1, val2){
    console.log(" Values Before Swap :     val1:", val1 + "  val2:", val2  );
    var temp = val1;
    val1=val2;
    val2=temp;
    console.log(" Values After Swap :     val1:", val1 + "  val2:", val2  );
}
swapValues("Virat" , "Anushka");
console.log("---------------------------------------------");
 swapValues(1000, 2000);

console.log("=================================Step 4=================================");
function addThreeValues(n1, n2, n3){
    var add = n1+n2+n3;
    console.log("Addition Of Three Numbers: ", add);
}
addThreeValues(10.23, 600,40);
addThreeValues("Hello ", "Good " , "Morning")

