function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("T");
    console.log("R");
    console.log("I");
}

// sayMyName()
                       // | (Parameters)
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

            // | (Aurguments)
addTwoNumbers(3, 8)

function addTwoNumbers(num1, num2){

    // let result = num1 + num2
    // return result

    return num1 + num2
    
}

const result =  addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Gayatri"));

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
