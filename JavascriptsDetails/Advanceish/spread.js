//  var returnedValue = Math.max(2,3,4,5,6,7,8,4,9,8);
//  console.log(returnedValue);
//  var returnedValue = Math.min(2,3,4,5,6,7,8,4,9,8);

//  console.log(returnedValue);
//  var myObj ={}
//  Object.assign(myObj,{a:1,b:2,c:3},{z:9,y:8,x:7});
//  console.log(myObj);


 function sumOne(a,b){
    return a+b;

 }
 var myA = [5,4];
//  console.log(sumOne(5,4,1));
// console.log(sumOne(...myA));// spread operators 


function sumTwo( a,b,...args){
    console.log(args);
    let multi = a*b;
     let sum = 0;
     for (const arg of args) {
        sum +=arg;

        
     }
     return [sum,multi];
}
console.log(sumTwo(2,3,1,1,1));
