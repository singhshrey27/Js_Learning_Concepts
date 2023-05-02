//New keyword:

var User=function(firstName,courseCount,){
      this.firstName=firstName;
      this.courseCount=courseCount;
      
      this.getCourseCount= function(){
       console.log(`Course count is : ${this.courseCount}`);
      };
};



var shrey=new User("Shrey",2);
//constrcutor and invoking every time a new instance of object
//first user
console.log(shrey);

var ram=new User("Ram",3);
console.log(ram);
