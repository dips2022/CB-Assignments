// unordered DS

let todo ={
    //properties
    title:"buy chocolate",
    completed:false,
    ande:"nahi khae",
    mickeymouse:100
}
// console.log(todo);
// console.log(todo.ande) //nahi khae
// console.log(todo['ande']) //nahi khae
// console.log(todo.title)//buy chocolate
// console.log(todo['title']) //buy chocolate
// console.log(todo['completed']) //false
// console.log(todo.completed) //getter
todo.completed = true; // setter
console.log(todo)
 todo['completed'] = 'hello';// setter
 console.log(todo)
 console.log(todo.completed);
 console.log(typeof todo)




