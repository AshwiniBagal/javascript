
console.log("====================Step 1==========================");
const fun = () => {
    console.log(`Good Morning, Today is Thursday.`);
}
 fun();

 console.log("====================Step 2==========================");

const  arrowFun = (n1, n2, n3=1)=>{
    console.log(`Multiplicarion of three Numbers: ${n1*n2*n3}`);

}

arrowFun(5,5,2);
arrowFun(10,4)


 console.log("====================Step 3==========================");

 const arrowFun2 = (v1, v2, v3, v4, v5)=>{
    let add = v1 + v2 + v3 + v4 + v5;
    return add;
 }

 let res = arrowFun2(100, 100, 200, 349, 756);
 console.log(`Addition of the given values : ${res}`);
 let res1 = arrowFun2("I am " , "learning " ,"ES6 " , "features " , "in depth");
 console.log(`Addition of the given values : ${res1}`);





 