const Koa = require('koa')
const app = new Koa()

app.use(async ( ctx ) => {
  console.log(ctx.cookies.get('cookie-key'))
  ctx.cookies.set(
    'cookie-key',
    'cookie-value',
    {
      maxAge: 10 * 60 * 1000,  // 失效期
      expires: new Date('2020-05-25'), // 有效期至
      httpOnly: false, // true: 只允许在server端访问, client无法访问
      overwrite: false // 是否允许被重写
    }
  )
  console.log(ctx.cookies.get('cookie-key'))
  ctx.body = 'linjiayu'
})

app.listen(3000, () => {
  console.log('[demo] cookie is starting at port 3000')
})