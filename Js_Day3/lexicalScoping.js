//Lexical Scoping:

function init(){
    var firstName="shrey";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}

init();
console.log(firstName);
//here the firstname is not under the scope , scope of firstName is avialable only till the block end of the init function
