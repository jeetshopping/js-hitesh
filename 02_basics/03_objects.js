// singleton 
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name ": "HiteshChoudhay",
    [mySym]: "mykey1",
    age :18,
    locatuon:"blr",
    email:"jeetchoudhary@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

    // console.log(JsUser.name);
    // console.log(JsUser["full name "]);
    // console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());