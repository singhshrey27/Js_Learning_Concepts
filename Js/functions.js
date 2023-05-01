//Block of code which can be reused again and again

function sayHello(){
    console.log("Hello this is function");
}

sayHello();


function hello(name){
    console.log("Hello "+name);
    console.log(`Hello i am ${name}`);
    //modern way of writing it(try to use this)
}

hello("shrey");


function namstey(){
    return "hello in India";
}

var greetings=namstey();
console.log(greetings);
