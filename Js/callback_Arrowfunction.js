var isEven=(element)=>{
    //instead of writing the function we use the arrow 
    //arrow fucntions requires a return type
    // if(element%2==0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return element%2===0;
}

console.log(isEven(4));



var result=[2,4,6,8].every(isEven);
//it will work for every element in the array on isEven
console.log(result);
//giving output false as here one elment is odd



//Callbacks: This is the arrow callback
//Method-1:
var result=[2,3,6,8].every((e)=>{
    return e % 2 ===0;
});
console.log(result);

//Method-2:
var result=[2,3,6,8].every((e)=>(e%2 === 0));
console.log(result);
//in case of these braces we don't have to use the return type