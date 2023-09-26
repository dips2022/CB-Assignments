var user={
    firstName:"Deepali",
    lastName:'Sonawane',
    role:'Student',
    loginCount:32,
    facebookSingnedIn:false,
    courseList:[],
    buyCourse:function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;

    },
    Info:function (){
        return` firstName is : ${this.firstName} lastName is: ${this.lastName} Role: ${this.role} LoginCount: ${this.loginCount}  FacebookSignIng: ${this.facebookSingnedIn} Courses: ${this.courseList}`
    }

};
var courseList= true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
console.log(user.Info());
console.table(user);