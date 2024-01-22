console.log("===============================Step 1=================================");
//Write a function to check whether given string is palindrom not,   madam ,,dad,, hello

function palondrom (str){
    let char = str.split("");
    let a = " ";
    //console.log(char);
   for (let index1 = 0; index1 < char.length; index1++) {
       a = char[index1]
    
   }
  let b = " ";
    for (let index = char.length ; index >= 0 ; index--) {
           
        b =  char[index];
    }
   // console.log(a);
    //console.log(b);
let res = a === b;
console.log(res);

}

palondrom("madam");
palondrom("dad");
palondrom("hello");


console.log("====================Step 2============================");
//Write the fu ction to check whether the given function is anagram or not.

function checkaAnagram( str1, str2){
    let str1length = str1.length;
    let str2length = str2.length;

    if(str1length != str2length){
        console.log("Invalid Input...");
    }
    
   let a = str1.split("").sort().join("");
   let b = str2.split("").sort().join("");

   if(a == b){
    console.log(`Given string ${str1} and ${str2} are an Anagram`);
   }
   else{
    console.log(`Given string ${str1} and ${str2} are Not an Anagram`);
   }  
}

checkaAnagram("silent" , "listen");
checkaAnagram("hello" , "world");
checkaAnagram("such" , "much");

