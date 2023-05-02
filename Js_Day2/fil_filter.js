//fill and filter

var testArray=[2,4,6,3,1,5,9,8];

console.log(testArray.fill("h"));
//it replaces all the values 

 console.log(testArray.fill("h",2));
//fill at all index h from index 2

//in most programming language start in inclusive and end is exclusive here

console.log(testArray.fill("h",2,5));
//fill "h" in the array from index 2 to 4


//Filter:

const myNumber=[23,25,30,34,45];

const result=myNumber.filter((num)=>num!=30);
//filter out the array , arrow function is used here
//const result=myNumber.filter((num)=>num<30);
console.log(result);