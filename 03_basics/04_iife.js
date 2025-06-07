// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Gayatri");


// Global scope remove pollution we use iife (Sometime create global pollution or diclearation)

