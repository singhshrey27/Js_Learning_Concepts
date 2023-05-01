//undefined
//null
//0
//.. (empty string) => These all are falsy values that are treated as a false
//NaN(Not a Number)

if(null){
  console.log("condition is true");
}else{
    console.log("Condition is false");
}

console.log("2"+2);
//Js don't know how to add the string and integer value so ans is 22(try to avoid such tricky situations always)

var user="2";
if(2==user){
    console.log("Js does not use strict checking and known as coercions")
}

//To avoid this we use === so that js does not assume something from their side and do the strict checking

if(2===user){
    console.log("This will not be implemented now");
}
//now in this case it is not executed