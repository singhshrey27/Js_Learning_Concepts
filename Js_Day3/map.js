var myMap = new Map();

myMap.set(1,"Uno")
myMap.set(2,"dos")
myMap.set(3,"Tres")
myMap.set(4,"Cuatro")

console.log(myMap);

//accessing the values from the map

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}
for(let value of myMap.values()){
    console.log(`Key is ${value}`);
}

//do both things simultanously:
for(let [key,value] of myMap){
    console.log(`Key is : ${key} and Values is ${value}`);
}

myMap.forEach((key)=>console.log(`${key}`));
//it always works gives always values first

myMap.delete(2);
console.log(myMap);