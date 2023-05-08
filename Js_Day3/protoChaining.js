//Proto In Js

//New keyword:

var User=function(firstName,courseCount,){
    this.firstName=firstName;
    this.courseCount=courseCount;
    
    this.getCourseCount= function(){
     console.log(`Course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function(){
          console.log(`Your firstName is : ${this.firstName}`);    
}
//this will inject without touching the above object (every time a new object is created it'll inject the code using protoype) it is accessing the object values

var shrey=new User("Shrey",2);
shrey.getCourseCount();
shrey.getFirstname();

if(shrey.hasOwnProperty("firstName")){
    shrey.getFirstname();
    //check whether it is present in object or not
}
//There are various properties

var ram=new User("Ram",3);
ram.getCourseCount();
ram.getFirstname();
