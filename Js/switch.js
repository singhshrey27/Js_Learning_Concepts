//Create an application with following roles:
//admin - gets full access
//subadmin - gets access to create/delete courses
// testprep - get access to create/delete tests
// user - gets access to consume content

//first if and else can be user

var user = "admin";

switch (user) {
    case "admin":
        console.log("You will get the full access");
        break;
    case "subadmin":
        console.log("You will get the access for create and delete the content");
        break;
    case "testprep":
        console.log("You will get the access to create/delete the test");
        break;

    case "user":
        console.log("Access to consume all the content");
        break;

    default:
        console.log("Trail user");
        break;
}