var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount  = function(){
           console.log(`Course count is :  ${this.courseCount}`);
    };
};

User.prototype.getFirstName= function(){
    console.log(`Your first name is: ${this.firstName}`);
};
var deepali = new  User("deepali",2);
deepali.getCourseCount();
deepali.getFirstName();

// console.log(deepali.firstName);
// console.log(deepali);


var sam = new User("Sam",1);
sam.getCourseCount();
sam.getFirstName();

// console.log(sam);



