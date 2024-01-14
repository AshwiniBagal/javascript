class Vehical{
    constructor(vehicalType, color, number, weigth, price, ){
        this.vehicalType = vehicalType;
        this.color = color;
        this.number =number;
        this.weigth =weigth;
        this.price =price;
    }
    
    
    

 getDetails(){ 
 console.log(`vehical Type: ${this.vehicalType} , Color: ${this.color} , Number: ${this.number} , Weigth: ${this.weigth} , Price: ${this.weigth}`);
}

}
console.log("==================================Step 1===================================");
const car = new Vehical("Car" , "Black", "MH2393" , "100kg" , 125000);
//console.log(car);
const truck = new Vehical("Truck" , "Yellow", "MH2353" , "300kg" , 160000);
//console.log(truck);
const tractor = new Vehical("Tractor" , "Red", "MH5693" , "200kg" , 169000);
//console.log(tractor);
const van = new Vehical("Van" , "White", "MH7893" , "150kg" , 1450000);
//console.log(van);
const bicycle = new Vehical("Bicycle" , "Gray", "MH6793" , "90kg" , 80000);
//console.log(bicycle);


const arrayOfVehicale = [ car, truck, tractor, van, bicycle ];
for (const element of arrayOfVehicale) {
    element.getDetails();
}

console.log("====================================Step 2===========================================");

class College{

    constructor(name, location, founded_year, total_students){
        this.name= name;
        this.location =location
        this.founded_year =founded_year;
        this.total_students =total_students;
    }

    display(){ 
        console.log(`Name: ${this.name} , Location: ${this.location} , Founded year: ${this.founded_year} , Total students: ${this.total_students} `);
       }

       traverseObject(obj){
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                console.log( `${key}  ==>  ${element}`);
            }
        
        }
    }
}


const clg1 = new College("KEC" , "Shelve", 2008  , 1000);
const clg2 = new College("Sveri" , "Pandharpur", 1988  , 3000);
const clg3 = new College("SKN" , "Korti", 2005  , 2500);
const clg4 = new College("UMA", "Pandharpur", 1980  , 4000);

clg1.display();
clg2.display();
clg3.display();
clg4.display();


//const arrayOfCollege = [ clg1, clg2, clg3, clg4,  ];


console.log("===============Step 3======================================================");

console.log("Object 1 :");
clg1.traverseObject(clg1);

console.log("Object 2 :");
clg2.traverseObject(clg2);

console.log("Object 3 :");
clg3.traverseObject(clg3);

console.log("Object 4 :");
clg4.traverseObject(clg4);