const Router = require("@koa/router");
const {getTraders,newTrader, getTrader} = require('../api/trader.api')

const router = new Router({
    prefix:'/Trader'
})

router.get('/',async ctx=>{
    ctx.body = await getTraders();
})

router.post('/',ctx=>{
    let user = ctx.request.body;
    user = newTrader(user);
    ctx.response.status = 201;
    ctx.body = user;
    console.log("added")
})

router.get('/:id',async ctx=>{
    const  id = ctx.params.id;
    ctx.body = await getTrader(id);
})

module.exports = router;