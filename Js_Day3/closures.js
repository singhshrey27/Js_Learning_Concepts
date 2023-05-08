//Closures in Js:

function init(){
    var firstName="shrey";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value=init();
//
value();


function doAddition(x){
    return function(y){
        return x+y;
    }

}
var add5=doAddition(4);
//it stores the reference of the above doaddition function and will store 
console.log(add5(5));

console.log(doAddition(5)(5));
//another method

