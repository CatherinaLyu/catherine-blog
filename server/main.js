/**
 * Created by catherine on 2018/08/08
 */
const http = require('http');
const koa = require('koa');
const cors = require('koa2-cors');
const koaStatic = require('koa-static');
const views = require('koa-views');
const parser = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');
const Router = require('koa-router');

const app = new koa();
// const router = require('./routers/index.js')(app);

// 1. /login 匹配登录页面
// 2. /
// 2.1 若已登录，匹配主页面
// 2.2 若未登录，匹配登录页面
// 注： 所有路由匹配之前都需要判断是否登录

let sign = new Router();
sign.get('/login',async(ctx)=>{
    ctx.body="login";
}).get('/register',async(ctx)=>{
    ctx.body ='register';
})

let home = new Router();
home.get('/',async(ctx)=>{
    ctx.body="root";
}).get('/add',async(ctx)=>{
    await ctx.render('../build/page/login.html', {});
})

let root = new Router();
root.get('/', async (ctx) => {
  ctx.body = 'ddd';
  await ctx.render('../build/page/login.html');
});
//装载所有子路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', sign.routes(), sign.allowedMethods());
router.use('/', root.routes(), root.allowedMethods());

// app.experimental = true;
app.use(logger())
app.use(views(path.resolve(__dirname)));
app.use(parser());
app.use(cors({
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(router.routes()).use(router.allowedMethods());

// 存放全局变量
app.use((ctx) => {
  ctx.state = {
    title: 'catherine blog',
    session: this.session,
  };
});

// app.use(cors());

// 处理静态资源
app.use(koaStatic(path.join(__dirname, 'build')))
app.use(koaStatic('./server/assets', {
  maxage: 1296000
}));
app.use(async (ctx, next) => {
  await ctx.render('./page/login.html');
  await next();
});

// 监听错误
app.on('error', error=>{
      console.error(error);
    })
// 监听端口
    .listen(3000,  ()=>{
      console.log('server listen at localhost:3000');
    });

