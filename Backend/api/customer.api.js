const {v4:uuid} = require('uuid');

const customers = new Map();

const newCustomer = ({Name,Email,Gender}) => {

    const id = uuid();

    const value = {
        id,
        Name,
        Email,
        Gender
    }
    customers.set(id,value);
}

const getCustomers = ()=>{
    return [...customers.values()]
}

const getCustomer = (id) => {
  return customers.get(id);
}

module.exports = {getCustomer,getCustomers,newCustomer}