const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const item = require('./routes/item.routes');
const cart = require('./routes/cart.routes');
const customer = require('./routes/customer.routes');
const trader = require('./routes/trader.routes')
const wishList = require('./routes/wishList.routes');
const promotion = require('./routes/promotions.routes');

const app = new koa();
app.use(cors());
app.use(bodyParser());
// app.use(ctx=>{
//     ctx.body='hi'
// })

app.use(item.routes()).use(item.allowedMethods());
app.use(cart.routes()).use(cart.allowedMethods());
app.use(wishList.routes()).use(wishList.allowedMethods());
app.use(customer.routes()).use(customer.allowedMethods());
app.use(trader.routes()).use(trader.allowedMethods());
app.use(promotion.routes()).use(promotion.allowedMethods());

app.listen(3000);
console.log('Application is running on port 3000')