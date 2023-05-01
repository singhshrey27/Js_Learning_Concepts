//Simple temp app which grabs today's temp and shows how much hot today it is

var temperature;

//TODO: go to google and get the data(later)

temperature=20;

if(temperature<=20){
console.log("It's very cold outside");
}
else if(temperature>20&&temperature<30){
    console.log("It's moderate temp today");
}
else{
    console.log("It's very hot today");
}