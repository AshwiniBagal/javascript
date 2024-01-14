function oddPositionedChar(str){
    
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (index % 2 !=0 &&  char != " ")
        {
        // if(char==" ") {
        //     continue;
        // }
            console.log(char);
            
        }
        
    }
}

oddPositionedChar("Hard work matters");
