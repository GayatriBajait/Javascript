//  reduce 

const  myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "c++ course",
        price: 5999
    },
    {
        itemName: "node.js course",
        price: 6999
    },
    {
        itemName: "react course",
        price: 7999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.
price, 0)

console.log(priceToPay);
