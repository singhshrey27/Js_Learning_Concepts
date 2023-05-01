var isEven=(element)=>{
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

var result=[2,3,6,8].every(isEven);
//it will work for every element in the array
console.log(result);
//giving output false as here one elment is odd


//Callbacks:
var result=[2,3,6,8].every((e)=>(e%2===0));
console.log(result);