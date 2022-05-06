const { v4 : uuid } = require('uuid');

const items = new Map();

// items.set('1',['1','hj',20,'ytygv'])
// items.set('2',['2','as',30,'ytygv'])

const newItem = ({name,price,description}) => {

    const id = uuid();
    // const id = 0;
    const value = {
        id,
        name,
        price,
        description
    }
    // console.log(items)
    items.set(id,value);
    //return value;

}

const getItems = ()=>{
    console.log(items);
    return [...items.values()];
    //return posts;
}

const getItem = (id) => {
    return items.get(id);
}

const updateItem = (id,{name, price, description}) => {
    const value = {
        id,
        name,
        price,
        description
    }
    if(items.has(id)){
        items.set(id,value);
        console.log('updated');

    }
    else {
        console.log('not updated');
    }

}

module.exports = {newItem,getItem,getItems,updateItem};