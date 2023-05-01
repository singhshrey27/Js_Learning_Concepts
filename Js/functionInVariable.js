/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
tesprep - with access to create/delete tests
user - consume all content
other - trial user.

Input : getUserRole(name,role)
*/

var getUserRole=function(name, role) {

    switch (role) {
        case "admin":
            return `${name} is admin with all access `
            break;
        case "subadmin":
            return `${name} is subadmin with access to create and delete code `
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete test `
            break;
        case "user":
            return `${name} is access to consume the content`
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("shrey","testprep"));

var getrole=getUserRole("shreyansh","admin");
console.log(getrole);


