const userEmail = "h@gmail.com"

if(userEmail){
    console.log("Got user Email");
}else {
    console.log("Don't have user email")
}


// false values

// false , 0 , -0 , BigInt 0n , "" , null, undefined, NaN


// truthy values

// "0", 'false' , " ", [], {}, function(){}, 


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}


// NUllish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  // 5

// val1 = null ?? 10 // 10

// var1 = undefined ?? 15   // 15

var1 = null ?? 10 ?? 20  //10

console.log(var1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ?  console.log("less than 80") : 
console.log("more than 80");