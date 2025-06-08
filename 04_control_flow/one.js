// if

// const isUserLoggedIn = true

// if (2=="2"){
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// }

// else {
// console.log("temperature is greater than 50");
// }




// const score = 200;
// let power; // Declare it with let (or var) so you can assign it later

// if (score > 100) {
//     power = "fly";
//     console.log(`User power inside block: ${power}`);
// }

// console.log(`User power outside block: ${power}`);



// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
    
// }
// else if (balance < 900) {
//     console.log("less than 750");
        
// }
// else {
//     console.log("less than 1200");
    
// }

// Logical Oprators

const userLoggedIn = true
const debitCard =  true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to by course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}