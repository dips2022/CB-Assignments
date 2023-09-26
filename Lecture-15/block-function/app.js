// let x = 10;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);


// var x = 10;// function scope 
// {
//     var x = 20;
//     console.log(x); //20
// }
// console.log(x);//20
// -------------hoisting-----------

// console.log(a); // undefined
// console.log(b); //  reference error => cannot access b before initialize
// var a = 10; 
// let b = 20;
// const c = 30; 


// var ke case main undefined milta hai and let and var case me error ata hai
// bcoz of "temporal dead zone" => which does not let you access a variable 
 

// MCP --------- DTZ(temporal dead zone)-------------CEP


// function fun(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//         console.log(b);
//     }
     
//     inner();
//     let b = 20;
// }
// fun();
