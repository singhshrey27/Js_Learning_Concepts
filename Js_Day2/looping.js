//for loop
var arr=[1,"pratp",23,4,5,"Shrey"];

// for(let i=0;i<arr.length;i++){
//     if(typeof(arr[i])=='string'){
//     console.log(arr[i]);
//     }
// }
//use break and continue;
// === compares the values along with it's type 

for(let index=0;index<arr.length;index++){
     if(arr[index]===23){
        break;
     }else{
        console.log(arr[index]);
     }
    }


