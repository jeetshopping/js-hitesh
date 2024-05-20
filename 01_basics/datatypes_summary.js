
// #Primitive 

// 7 types : String , number , boolean , null , undefined, Symbol, BigInt

 const score  = 100 
 const scoreValue = 100.3


 const isloggedIn = false

 const outsideTemp = null

 let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 4344323452n



// # Reference ( Non Primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","naagraj", "doga"];
let myObj=
{
    name:"hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world")
}


// console.log(typeof bigNumber);
// console.log(typeof myObj);
// console.log(typeof heros);
// console.log(typeof myfunction);
// console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory ( Primative datatype )
// Heap Memory (Non Primative datatype)


let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherName);

let user1 ={
    email:"user@goggle.com",
    upi:"user@ybl"
}

let userTwo = user1

// console.log(user1);

// console.log(userTwo);

userTwo.email="userTwo@goggle.com";

// console.log(userTwo);
// console.log(user1);