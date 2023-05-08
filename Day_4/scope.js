//let , var keyword:

//Yes,scope is a big issue in Js
//Js consider the functions as a course

console.log(name);
let name="shrey"
//in case of using the var if will give the undefined but in case of let it will give error which is good for the backend part

if(true){
    let lastName="pratap"
    
}
console.log(lastName);
//it'll not access the lastName variable here as it's scope is finised till block of if condition