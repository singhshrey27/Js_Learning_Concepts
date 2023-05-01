//Variety of context and their working

//Initially the global context is filling all the details and values

var num=2;
function sayMe(){
    console.log("say me");
    //execution context is working
}

sayMe();
//excution context is working(exection context is working with every line of code creating a stack)


//Execution Context Includes:
// 1.Variable Object
// 2.Scope Chain
// 3.This keyword

//Two rules:
//1.Funciton declarations are scanned and made available(that's y function declared after calling easily runs)
//2.Varibale declarations are scanned and made undefined

tipper("80");

function tipper(x){
    var bill=parseInt(x);//to avoid getting concatated
    console.log(bill+5);

}

bigTipper("200");

function bigTipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}

bigTipper("200");

var bigTipper=function(a){
    var bill=parseInt(a);
    console.log(bill+5);
}
//the above code will be run(but it's correct) refer to point 2 above

console.log(name);
var name="shrey";
//gives output undefined

function sayName(){
    var name="Mr. shrey";
    console.log(name);
}
sayName();

console.log(name);
//here name variable prints asper the scope of it