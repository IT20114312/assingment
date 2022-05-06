const Router = require('@koa/router');
const {newCustomer,getCustomers,getCustomer} =require('../api/customer.api')

const router = new Router({
    prefix:'/Customer'
})

router.get('/',async ctx=>{
    ctx.body = await getCustomers();
})

router.post('/',ctx=>{
    let user = ctx.request.body;
    user = newCustomer(user);
    ctx.response.status = 201;
    ctx.body = user;
    console.log(user)
})

router.get('/:id',async ctx=>{
    const  id = ctx.params.id;
    ctx.body = await getCustomer(id);
})

module.exports = router;