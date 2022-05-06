const { v4 : uuid } = require('uuid');

const promotions = new Map();

const newPromotion = ({nameofPromotion, discount, reason})=>{
    const id = uuid();
    // const id = 0;
    const value = {
        id,
        nameofPromotion,
        discount,
        reason
    }
    // console.log(items)
    promotions.set(id,value);
    //return value;

}

const getPromotions = ()=>{
    console.log(promotions);
    return [...promotions.values()];
    //return posts;
}

module.exports = {newPromotion,getPromotions}