const Router = require('@koa/router');
const {newPromotion,getPromotions} = require('../api/promotions.api')

const router = new Router({
    prefix:'/promotions'
});

router.get('/',async ctx=>{
    ctx.body = await getPromotions();
})

router.post('/',async ctx=>{
    let promotion = ctx.request.body;
    promotion = newPromotion(promotion);
    ctx.response.status = 201;
    ctx.body = promotion;
})

module.exports = router;