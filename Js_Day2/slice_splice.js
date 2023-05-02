//Slicing:

var users=["Ted","Tim","Ton","Sam","Sor","Sod"];

console.log(users.slice(1,4));
//it's output is tim , ton it only includes those items which are in the slice index

console.log(users.slice(1));
//in this case the ted is removed that is sliced(cut off)



//Splicing:
users.splice(1,2,"HI");
console.log(users);
//start from index 1 and just count till 2(it means here Tim,Ton will be removed) delete those items and replace with what i am providing

users.splice(1,3,"HI","Bye");
console.log(users);
//pass as many value you like

//Refer to MDN docs