// const user = ["deepali",3,"admin"];
// var role = user[2];
// var name = user[0];


// var [name,courseCount,role] = user;
// console.log(role);

const myUser = {
    name: "deepali",
    courseCount:5,
    role:"student",
};
 
console.log(myUser.courseCount);

const { name,courseCount,role} = myUser;
console.log(role);