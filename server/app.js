const Koa = require('koa');
const cors = require('koa-cors');
const router = require('./routers/index.js');

const app = new Koa();

app.use(cors());
// response
app.use(async (ctx, next) => {
  console.log(ctx.request.path, ctx.request.method);
  await next();
});

app.use(router.routes());

app.listen(3002);
console.log('system started at localhost:3002');