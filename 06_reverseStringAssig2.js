function reverseString(str){
    for (let index = str.length-1; index >= 0 ; index--) {
        let char = str.charAt(index);
        if (char == " ") {
            continue;
        }
        console.log(char);
        
    }
}
console.log("----------------Reversed String 1-------------------------");
reverseString("Hard work always pays back");
console.log("----------------Reversed String -------------------------");
reverseString("Soon I will be UI IT Champ")