//object literls

const mysmb = Symbol("key1")

const juser = {
    name : "sachin",
    [mysmb] : "value1",
    age : 38,
    location : "pune",
    email : "dk@gmail.com",
    isloggedin :  true
}

// console.log(juser.name); // sachin print krega
// console.log(juser.age); // 38 print krega
// console.log(juser["location"]); // pune print krega

// juser.email = "sachin@gmail.com" // email update krega
// Object.freeze(juser) // object ko freeze krega aur update nahi hoga
// juser.email = "newemail@gmail.com" // update nahi hoga
// console.log(juser);

// //symbol ke liye
// console.log(juser[mysmb]); // value1 print krega


juser.greeting = function(){
    console.log(" hello js user");
}



juser.greetingt = function(){
    console.log(` hello js user,${this.name}`);
}
console.log(juser.greeting());
console.log(juser.greetingt());
