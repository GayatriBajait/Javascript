const user = {
    username: "Gayatri",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Gayatri"
//     console.log(this.username);
    
// }

// chai()

const chai =  () => {
    let username = "Gayatri"
    console.log(this);
    
}

// chai()

// const addTwo = (num1, num2) => {                 // when write {} need to write return 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)        // when write () no need to write return

const addTwo = (num1, num2) => ({username: "Gayatri"})

console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()