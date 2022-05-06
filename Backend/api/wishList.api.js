const wishList = new Map();

const addToWishList = ({ItemID,name,price,description})=>{
    const value = {
        ItemID,
        name,
        price,
        description
    }
    wishList.set(ItemID,value);
}

const getWishList = ()=>{
    return [...wishList.values()];
}


module.exports = {addToWishList,getWishList}