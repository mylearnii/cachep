const koa = require('koa')
const app = new koa();
const TimeClear = require('./regular')
let cached = {};
let num = 0;
app.use(async ctx => {
    console.log(ctx.request.url)
    if (cached[ctx.request.url]) {
        ctx.body = cached[ctx.request.url]
    } else {
        let rs = num + 'mm'
        ctx.body = rs
        cached[ctx.request.url] = 'from-cached-' + rs
        num++
        console.log(cached)
    }
})

let clear = new TimeClear()

//0点0分开始24小时清空一次缓存
function clearcache() {
    console.log(cached)
    cached = {}
}

clear.start(clearcache, 0, 0, 0, 24, 0, 0)
app.listen(3000)
