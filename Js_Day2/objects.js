//Objects:

var user={
    firstName:"Shrey",
    lastName:"Pratapsingh",
    role: " Admin",
    logincount: 32,
    facbookSignedIN: true

};

//accessing objects
console.log(user.firstName);
//another method
console.log(user["lastName"]);


///changes in object
user.logincount=44;
console.log(user.logincount);
console.table(user);
//it gives a table 