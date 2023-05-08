const courses=[
    {
        name: "complete reacjs course",
        price: "2.3"
    },
    {
        name: "complete node course",
        price: "6"
    },
    {
        name: "complete js course",
        price: "4"
    },
    {
        name: "complete mern course",
        price: "3"
    },
];

function generateList(){
    const ul=document.querySelector(".list-group");
    courses.forEach(course => {
       const li=document.createElement("li")
       //it will create a <li></li>
       li.classList.add("list-group-item")
       const name=document.createTextNode(course.name)
       li.appendChild(name)

       //now insert the span inside the li item
       const span=document.createElement("span")
       span.classList.add("float-right")

       const price=document.createTextNode("$"+ course.price)
       span.appendChild(price)

       //Inject the entire span
       li.appendChild(span)
       ul.appendChild(name)

    }); 
}
//generateList();


//Now we want to refresh the page every time the page get's loaded
window.addEventListener("load",generateList())

const button= document.querySelector(".sort-btn")
button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price)
})