function Student( id , name,  dipartment,marks,){
    this.id = id;
    this.name = name;
    this.dipartment =dipartment;
    this.marks = marks;

    this. display= function(){
        console.log(`id:${this.id}, name:${this.name}, dipartment: ${this.dipartment} , marks: ${marks}`);

    }

}
const ashu = new Student(122, "Ashu" , "ETC", 90);
console.table(ashu);
ashu.display();
console.log(ashu.name);
console.log("===========================================");

//let array = [];
function reverseString(str) {
    for (let index = str.length-1; index >=0; index--) {
        
        console.log(str[index]);
        
    }
}

reverseString("Hello Ashwini");