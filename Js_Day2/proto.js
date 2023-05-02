//Proto In Js

//New keyword:

var User=function(firstName,courseCount,){
    this.firstName=firstName;
    this.courseCount=courseCount;
    
    this.getCourseCount= function(){
     console.log(`Course count is : ${this.courseCount}`);
    };
};



var shrey=new User("Shrey",2);
shrey.getCourseCount();

var ram=new User("Ram",3);
ram.getCourseCount();
