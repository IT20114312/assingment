const {v4:uuid} = require('uuid');

const traders = new Map();

const newTrader = ({Name,Email,Gender}) => {

    const id = uuid();

    const value = {
        id,
        Name,
        Email,
        Gender
    }
    traders.set(id,value);
}

const getTraders = ()=>{
    return [...traders.values()]
}

const getTrader = (id) => {
    return traders.get(id);
}

module.exports = {getTrader,getTraders,newTrader}