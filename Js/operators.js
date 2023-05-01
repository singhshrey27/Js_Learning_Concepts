//Calculations such +,/,-,*

var num1=7;
var num2=6;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

var answer=num1>num2;
//it will store true as a bolean value as it is true

console.log(answer);


//Two prices are given just calculate the discount for the other one
//discount,selling price,listing price
// D=(L-S)/L*100;

//always wrap up different operand along with the operators

var sellingPrice=199;
var listingPrice=799;

var discountPercent=(listingPrice-sellingPrice)/listingPrice*100;
console.log("Discount Percentage is: "+discountPercent+"%");

displayDiscountPercentage=Math.round(discountPercent);

console.log("Discount Percentage is rounded: "+displayDiscountPercentage+"%");