const arrayNum = [11, 3, 4,11,4,7,3];
const newArr = [];
for (let index = 0; index < arrayNum.length; index++) {
       
            if(newArr.indexOf(arrayNum[index]) === -1){
             
            newArr.push(arrayNum[index]);
            }
        }  
        
        console.log("============Step 1===============");
       console.log(newArr);



       console.log("=============Step 2================");

       function capitalizeFirstAndLast(str) {
        var words = str.split(" ");
        var result = "";
    
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.length > 1) {
                var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1, -1) + word.slice(-1).toUpperCase();
                result += capitalizedWord + " ";
            } else {
                result += word.toUpperCase() + " ";
            }
        }

        
        result = result.trim();

        return result;
    }
    
   
    var inputString = "How are you mate;";
    var outputString = capitalizeFirstAndLast(inputString);
    console.log(outputString); 