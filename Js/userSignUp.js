const uid="abc123";
//every user should be unique and must have unique id for that we'll be using here const

//uid="abcd234"; 
//This is not allowed

var fullName="Shiransh Pratap Singh";
var email="sp999pratap@gmail.com";
var password="123456";
var confirmPassword="123456";
var courseCount=0;
//as the userSigns up his courseCount should be zero
var isLoggedInFromGoogle=false;
//always use such large variable while building something

// fullname=prompt("Enter your name");

console.log(uid);
console.log("Full Name is: "+fullName);
console.log("Full Name is: ",fullName);
//this is another method 
console.log(email);

console.log(`
With Unique ID: ${uid}
User Name is: ${fullName}
User Email is: ${email}
Uses password: ${password}
`);

//Inside the backticks it print the values as it is
//${} is used to put variable inside the curley braces
//Known as the interpolation


//Assginment 1: Create a userSign up like this which includes ask user's first name,middle and last name
// His state , country age and password and display it 