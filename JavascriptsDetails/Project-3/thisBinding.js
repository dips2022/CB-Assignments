const deepali  = {
    firstName:"Deepali",
    lastName:"Sonawane",
    role:"Student",
    courseCount:3,
    getInfo: function(){
        console.log(`
        first name is ${this.firstName}
            Last name is ${this.lastName}
            she is role as ${ this.role}
            and she is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName:"Rock",
    lastName:"DJ",
    role:"Sub-Admin",
    courseCount:4,
};
 

// deepali.getInfo();
// dj.getInfo();
//  var djInfo = deepali.getInfo.bind(dj);
//  djInfo();

deepali.getInfo.call(dj);