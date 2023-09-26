// function init(){
//     var firstName = "deepali";
//     console.log("I am Init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//      return sayFirstName();

// }

// var value = init();

function doAddition(x){
    return function(y){
        return x+y;
    }
}
var add5 = doAddition(4);
 console.log(add5(5)) ;