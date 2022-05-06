// const Router = require('@koa/router');
// const {getCartItems, addCartItem,newCart} = require('../api/cart.api')
//
// const router = new Router({
//     prefix:'/carts'
// })
//
// router.get('/:id',async ctx=>{
//     const userID = ctx.params.id;
//     ctx.body = await getCartItems(userID);
// })
//
// router.post('/add/:id', async ctx=>{
//     const userID = ctx.params.id;
//     console.log(userID);
//     let addItem = ctx.request.body;
//     ctx.response.status = 201;
//     ctx.body = addItem;
// })
//
// module.exports = router;

const Router = require('@koa/router');

const {getcartItems,addToCart} = require('../api/cart.api')

const router = new Router({
    prefix: '/cart'
});

router.get('/',ctx=>{
    ctx.body = getcartItems();
});

router.post('/',ctx=>{
    let item = ctx.request.body;
    cart = addToCart(item);
    ctx.response.status = 201;
    ctx.body = cart;
})

module.exports = router;