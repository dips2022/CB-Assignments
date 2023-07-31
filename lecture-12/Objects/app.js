let todo={
    title:'system design by alex- xu',
    due:10,
    compeleted:false
}
// console.log('i am reading a book called toto');
// console.log(todo);

// the keys inside  your objects they are behind the schene stored as strings


// console.log(todo['title']); // Array access ->right


// let person = {
//     name:'deepali sonawane',
//     city: 'maharastra'

// }

// function describe(obj){
//      console.log('hi i am ${obj.name},i belong to ${obj.city}');
// }
// describe(person);



let person ={
    name:'deepali',
    city:'maharastra',
    func: function describe(){ 
        return ('hi i am ${person.name},i belong to ${person.city}')

    }
}

 let ans = person.func();
 console.log(ans);