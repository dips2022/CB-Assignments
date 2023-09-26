let person ={
    naam:'deepali',
    city:'loni',
    describe:function desc(){
        console.log(`hii my name is ${person.naam}`);
        console.log(` hii my name is ${this.naam}`)
        // this keyword points to the object when  reffered in the methods 
        // return 10; when nothing is return from a function by default return ```undefined```  
    }  
}
let ans = person.describe();
console.log(ans)
// person.describe();//right
// console.log(person.describe());

