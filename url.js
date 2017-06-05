
const Koa = require('koa');

const router = require('koa-router')();

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url} ...`);
    await next();
});

router.get('/hello/:name', async (ctx, next) => {
    console.log(333)
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

console.log('111111111111');
app.use(router.routes());
console.log('2222222222222');

app.listen(3000);

console.log('app started at port 3000...');








