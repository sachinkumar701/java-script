//const tuser = new user object()

const tuser = {}

tuser.id = "13s"
tuser.name = "scnoi"
tuser.isloggedin = true

//console.log(tuser);

const ruser = {
    email : "sjjb@domain.com",
    fullname : {
        userfullname: {
            firstname : "sachin",
            lastname : "kumar"
        }
    }
}
//console.log(ruser.fullname.userfullname.firstname); // sachin print krega

const obj1 = {1 : "one", 2 : "two", 3 : "three"}
const obj2 = {1 : "one", 2 : "two", 3 : "three"}

// const obj3 = Object.assign({},obj1,obj2) // obj1 aur obj2 ko merge krega
//console.log(obj3); // {1: "one", 2: "two", 3: "three"} print krega

// const obj3 = {...obj1,...obj2} // obj1 aur obj2 ko merge krega spread operator ke through
// console.log(obj3); // {1: "one", 2: "two", 3: "three"} print krega


console.log(Object.keys(tuser)); // ["id", "name", "isloggedin"] print krega
console.log(Object.values(tuser)); // ["13s", "scnoi", true] print krega

console.log(Object.entries(tuser)); // [["id", "13s"], ["name", "scnoi"], ["isloggedin", true]] print krega

console.log(tuser.hasOwnProperty("name")); // true print krega