// function function_name(){

// }

// function sheru(){
//     console.log('khana khalo shero')
// }
// sheru();


// function sum(){
//     let num1=10;
//     let num2 = 30;
//     console.log(num1+num2);
// }
// sum();
// sum();
// sum();
// sum();
// sum();
//----------------------

// Parameterize function
// function sum(num3){ // parameter
//     let num1=10;
//     let num2 = 30;
//     console.log(num1+num2+num3);
// }
// sum(50); // argument
// sum(20);
// sum(40);

// function sum(num1,num3){  
//     // let num1=10;
//     console.log(num1);// UNDEFINED
//     console.log(num3);// UNDEFINED
//     let num2 = 30;
//     console.log(num1+num2+num3);
// }
// sum(10); // one argument only  NaN -> NOT A NUMBER
// sum() // zero argument -> NaN -> not a number
 
// function sum(num1,num3=10){ // default value parameter 
//     // let num1=10;
//     console.log(num1);// UNDEFINED
//     console.log(num3);// UNDEFINED
//     let num2 = 30;
//     console.log(num1+num2+num3);
// }
// sum(10,30); // if you gibr all the argument then default vlaue gets override it will take 30 


//---------------------------------

function sum(){
    let num1=10;
    let num2=15;
    let ans= num1+num2;
    return ans;  
}
//  let final = sum();
//  console.log(final)
// or

// console.log( sum())
 

