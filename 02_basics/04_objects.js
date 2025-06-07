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

const obj1 = {1: "a", 2: "b"}       // Target
const obj2 = {3: "c", 4: "d"}       // Sorce
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2, obj4 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


// When value's come from database

const users = [
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLogged"));  // Use for checking the property is available or not (If it is there so O/P either it is false)

// Destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Gayatri"
}

//  course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// Object API O/P 

// {
//     "name": "gayatri",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array API O/P

[
    {},
    {},
    {}
]