const { v4:uuid} = require('uuid');
// // const item = require('./item.api')
// const {getItem} = require("./item.api");
//
// const cart = new Map();
//
// // cart.set('1',['1',['1','2'],240])
//
// const newCart = ({userID,productID,quantity}) =>{
//     let item = getItem(productID);
//     const value = {
//         userID,
//         items:[item],
//         bill: quantity*item.price
//     }
//     cart.set(userID,value);
// }
// const getCartItems = (id)=>{
//     return cart.get(id);
// }
//
// const addCartItem = ({userID,productID,quantity}) =>{
//     if(cart.get(userID)) {
//         let item = getItem(productID);
//         console.log(item);
//         // const name = item[1];
//         const price = item.price;
//
//         const cost = price * quantity;
//         cart.bill += cost;
//         const value = {
//             userID,
//             items:[item],
//             bill: quantity*price
//         }
//         console.log(value)
//         cart.set(userID, value);
//
//     }else {
//         newCart(userID,productID,quantity);
//     }
// }
//
// const purchase = (userID) =>{
//
// }
//
// module.exports = {getCartItems,addCartItem,newCart}


const cart = new Map();

const getcartItems= ()=>{
    return [...cart.values()];
}

let bill = 0;
const addToCart = ({ItemID,name,price,description})=>{
    bill +=price;
    const id = uuid();
    const value = {
        ItemID,
        name,
        price,
        description,
        bill
    }
    cart.set(id,value);
}

module.exports = {getcartItems,addToCart}
