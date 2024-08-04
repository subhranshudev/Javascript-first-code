const myNums = [1, 2, 3]

// const newNums = myNums.reduce(function (accumulator, currentValue){
//         console.log(`acc: ${accumulator} and currval:${currentValue}`);
//         return accumulator + currentValue
// }, 0)

// const newNums = myNums.reduce( (acc, currval) => acc + currval , 0 )
// console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price, 0)
console.log(priceToPay);