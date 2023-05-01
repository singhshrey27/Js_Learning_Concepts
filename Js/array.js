//Arrays , objects and loops

var name=["rajsthan","mp","up"];
var states=new Array("delhi","mumbai","russia");
console.log(name[2]);
console.log(states[1]);
console.log(states.length);
states[0]="banglore";
//used like the squre backets
for(var i=0;i<=name.length;i++){
console.log(states[i]);
}

var user=["shrey","sp999pratap@gmail.com",34,true];
//it can store the multiple type of values in the arrays
console.log(user);

user.pop();
//removes the value from the end
console.log(user);

user.unshift("Newvalue");
//it pushes new value at front and shifts rest other elements
console.log(user);

user.shift();
console.log(user);
//new value will be removed 

console.log(user.indexOf(34));

//convert the string into arrays
console.log(Array.from("shrey"));