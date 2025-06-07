// Singleton

// const tinderUser = new Object()    // ==>  Singleton object
const tinderUser = {}  // ==> Non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Gayatri"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "gayu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gayatri",
            lastname: "Bajait"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = 