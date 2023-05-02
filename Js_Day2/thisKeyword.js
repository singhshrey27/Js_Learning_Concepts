//For all regular function calls,this points to window object
console.log(this);
//this will produce the empty object

var user={
    firstName : "shrey",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 9",this);
    

    function sayhello(){
        console.log("Line 13",this);

    }
    sayhello();
    //now in this case this keyword will not contain the whole object instead contains the window object
}

};

user.getCourseCount();
//function call through the object
