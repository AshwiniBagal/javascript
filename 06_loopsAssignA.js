

console.log( "=================================Vowels=======================================")
 let str = "I am very good IT Developer";
 let vowelsCount = 0;
 for (let index = 0; index < str.length; index++) {
   let ch = str.charAt(index).toLowerCase();
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch =='o' || ch =='u'){
         vowelsCount++;
    } 
 } 
 console.log(`Vowels Count is: ${vowelsCount}`);

 console.log("==========================Sum of cube of numbers============================");
let sum = 0;
 for (let index = 1; index <= 5; index++) {
    let cub = index**3;
    sum = cub + sum;
    }
    console.log(`Sum of cube of numbers : ${sum}`);

    console.log("==========================Odd Positioned Characters============================");
    console.log( "-------------------First String------------------------"); 
    function oddPositionedChars(str){
       for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (index % 2 != 0) {
            if(char == " "){
                continue;
            }
            console.log(char);    
        }  
       }
    }

    oddPositionedChars("Soon I will be UI IT Champ");
   console.log( "-------------------Second String------------------------");  
    oddPositionedChars("Hard work always pays back");                       