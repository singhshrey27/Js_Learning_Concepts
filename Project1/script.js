//set Timeout and setinterval

//setTimout(function,milliseconds)
//for a period of time it get's time out

//setInterval(funciton,milliseconds)
//for the interval of time it is working

var counter=document.querySelector(".counter");
var followers=document.querySelector(".followers");

counter.innerHTML=2000;
//innerHTML is used to access the inner thing inside the class

let count=1;
setInterval(()=>{
    if(count<1000)
      count++;
      counter.innerHTML=count; 
},1)
//time is given of 1 millisecond that in every one milliseconds the content is getting changed here

//setTimeout:

setTimeout(()=>{
    followers.innerHTML="1000 subscribers reached";

},4000)

//here time is 7k milliseconds 



//change after 1000miliseconds