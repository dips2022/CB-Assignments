
// let marks ={
//     dsa:55,
//     web:85,
//     ml:67,
//     totalMarks:function(fine){
//         return 55+85+67-fine;
//     }
// }
// console.log(marks.totalMarks(50));//207 - 50 = 157

//-------------------------------

let marks ={
    dsa:55,
    web:85,
    ml:67,
    totalMarks:function(fine){
        return  this.dsa+ this.ml+ this.web- fine;
    }
}
//console.log(marks.totalMarks(50));//207 - 50 = 157


// ***** string methods ******


let str ="Maverick";
let len = str.length;
//console.log(len);

// 2. toUpperCase()
// let ans = str.toUpperCase()

// console.log(ans)
// console.log(str.toUpperCase());

// 3 toLowerCase()

let ans = str.toLowerCase();
console.log(ans);


