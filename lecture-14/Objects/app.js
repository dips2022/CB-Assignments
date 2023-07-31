// object
// . Properties 
// .key - value pair

// let todo = {
//     title:'buy books',
//     completed:true,
//     due:30
// }
// console.log(todo)



// let todo = {
//     title:'buy books',
//     completed:false,
//     due:30
// }
// console.log(todo.completed)
//  todo.completed=true
// console.log(todo.completed)

// console.log(todo['title'])




// the keys  inside your object they are hehind the schene stored as Strings


// let person = {
//     name:'deepali sonawane',
//     city:"maharastra"
// }


//  function decribe(obj){
//     console.log(`hi i am ${obj.name},i belong to ${obj.city}`)
//  }
//  decribe(person);



 
// let person = {
//     name:'deepali sonawane',
//     city:"maharastra",
//     func:function decribe(){
//         console.log(`hi i am ${person.name},i belong to ${person.city}`)
//      }
// }
//  console.log(person.name)
//  console.log(person.city)
// //  console.log(person.func) // WRONG
// console.log(person.func())



let person = {
    name:'deepali sonawane',
    city:"maharastra",
    func:function decribe(){
       return (`hi i am ${this.name},i belong to ${this.city}`)
     }
}
 console.log(person.name)
 console.log(person.city)
//  console.log(person.func) // WRONG
 let ans = person.func();
 console.log(ans)
