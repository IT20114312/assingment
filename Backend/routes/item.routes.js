const Router = require('@koa/router');
const {getItems,newItem, getItem,updateItem} = require('../api/item.api');

const router = new Router({
    prefix:'/items'
}) ;

router.get('/', async ctx=>{
    ctx.body = await getItems();
})

router.post('/', async ctx=>{
    let item = ctx.request.body;
    item = newItem(item);
    ctx.response.status = 201;
    ctx.body = item;
})

router.get('/:id',async ctx=>{
    const  id = ctx.params.id;
    ctx.body = await getItem(id);
})

router.put('/update/:id',async ctx=>{
    const  id = ctx.params.id;
    let item = ctx.request.body;
    ctx.body = await updateItem(id,item);
    ctx.body = item;
})

module.exports = router;


