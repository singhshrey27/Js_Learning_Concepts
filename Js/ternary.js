//Show user a signout button if he is authenticated,
//other wise show him option to Login/Signup

var authenticated = true;

if(authenticated){
    console.log("Show signout button");
}else{
console.log("Show login options");
}


//Other method: using the ternary operator:

authenticated ? console.log("Signout Button") : console.log("Login");