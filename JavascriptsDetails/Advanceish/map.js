var myMap = new Map();
myMap.set(0,"uno")
myMap.set(1,"dos")
myMap.set(3,"Tres")
myMap.set(4,"Cuatro")

console.log(myMap);

 

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }


// for(let [key,value] of myMap){
//     console.log(`Key is : ${key} and Value is ${value}`);
// }

myMap.forEach( (key)=>console.log(`${key}`) );
// console.log(myMap);
myMap.delete(2);
console.log(myMap);


