var user={
    firstName:"Shrey",
    lastName:"Pratapsingh",
    role: " Admin",
    logincount: 32,
    facbookSignedIN: true,
    courseList:[],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
        //to refer the object here this simply refers as user
    },
    //defining the fucntion inside the object 
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },


    //Assignment: create a info method and show all things

    info: function(){
         console.log(this.firstName);        
         console.log(this.role);        
         console.log(this.logincount);        
    }
};

var courseList=true;
console.log(user.firstName);

user.buyCourse("React js course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
user.info();