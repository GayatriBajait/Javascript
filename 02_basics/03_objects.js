// singleton
// object.create

// object literals

const  mySym = Symbol("key1")


const JsUser = {
    name: "Gayatri",
    "full name": "Gayatri Bajait",
    [mySym]: "mykey1",
    age: 21,
    location: "Chandrapur",
    email: "gayatribajait@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.email = "gayatri@gg.com"
// Object.freeze(JsUser)
// freeze help's to not change the value 
JsUser.email = "gayu@jj.com"     // This value is not display because i was freeze the value
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello guys");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello guys, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

