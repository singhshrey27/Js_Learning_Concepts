const shrey={
    firstName :"shrey",
    lastName :"pratap",
    role: "Admin",
    coursecount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        last Name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.coursecount} courses
        `);
    }
}

const dj={
    firstName: "Rock",
    lastName: "DJ",
    role: "Sbu-Admin",
    coursecount: 4,
}

// shrey.getInfo();
// dj.getInfo();

//to bind the two different objects here

//method1
shrey.getInfo.bind(dj)();

//Method 2:
//storing the referecne 
var djInfo=shrey.getInfo.bind(dj);
djInfo();