var user={
   name: "",
   getuserName: function(){
    console.log(`User name is : ${this.name}`)
   },
};

//var shrey=new user;
var shrey=Object.create(User);