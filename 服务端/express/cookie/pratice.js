const express = require('express')
const cookie = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookie('123456'))//传入加密签名
app.get('/', (req, res) => {
  res.cookie('username', '张三', { maxAge: 3000, httpOnly: true, signed: true })
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.end('ok')
})
// domain: 域名。设置子域名（二级域名）是否可以访问cookie。 例：domain:'.主域名'
// expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday, 09-Nov-99 23:12:40 GMT
// maxAge： 最大失效时间（毫秒），设置在多少后失效
// secure： 当 secure 值为 true 时， cookie 在 HTTP 中是无效，在 HTTPS 中才有效
// path： 表示 cookie 影响到的路由，如 path=/。如果路径不能匹配时，浏览器则不发送这个 Cookie
// httpOnly：默认为false,建议设置为true, 客户端将无法通过document.cookie读取到 COOKIE 信息，可防止 XSS 攻击产生
// signed： 表示是否签名（加密） cookie, 设为 true 会对这个 cookie 签名，这样就需要用res.signedCookies 访问它,前提需要设置上面中间件app.use传参 。未签名则用 res.cookies 访问
// 被篡改的签名 cookie 会被服务器拒绝，并且 cookie值会重置为它的原始值。
app.listen(port, () => console.log(`Example app listening on port ${port}!`))