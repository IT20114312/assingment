const Router = require('@koa/router');
const {getWishList, addToWishList} = require("../api/wishList.api");


const router = new Router({
    prefix:'/wishList'
});

router.get('/',ctx=>{
    ctx.body = getWishList();
})

router.post('/',ctx=>{
    let item = ctx.request.body;
    wishList = addToWishList(item);
    ctx.response.status = 201;
    ctx.body = wishList;
})

module.exports = router;