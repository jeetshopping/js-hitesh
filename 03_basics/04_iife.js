// Immediately Invoked Function Expressions (IIFE)


(function chai(){  // named IIFE
    console.log(`DB CONNECTED`);
})();

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();

( () => {    // Unnamed IIFE
    console.log(`DB CONNECTED THree`);
}) (); // we have to do semicolon

// passing the arrow function

( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')