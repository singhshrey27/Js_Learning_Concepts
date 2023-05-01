var name="shrey";

console.log("This is line 3", name);

function sayName(){
    var name="My H";
    console.log("Line number 7", name);

    sayName2();
    function sayName2(){
        var name="Mr Hc";
        console.log("Line number 10",name);
    }
    
}
sayName();

//it can use the value from above not from bottom