# ajax

[TOC]

### 什么是 AJAX，它的作用是什么?

AJAX(Async Javascript And XML)
指的是异步的 JavaScript 和 xml
通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

### 原生的 ajax 请求有几个步骤?

1. 创建 XMLHttpRequest 对象(简称 XHR)

```js
let xhr = new XMLHttpRequest();
```

2. 规定请求的类型，接口和是否处理异步请求

```js
xhr.open("get/post", url, true / false);
```

3. 规定发送至服务器的数据类型和编码

```js
xhr.setRequestHeader("Content-Type", "编码类型");
```

4. 发送请求

```js
xhr.send("发送的内容");
```

5. 接收服务器响应的数据

```js
xhr.onreadyStateChange = function () {
  if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {
  }
};
```
**其中readyState从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪**

### JSON 字符串转对象

```js
let jsonstr = JSON.parse(json);
eval("(" + jsonstr + ")");
```

### 常用的 get 和 post 请求的优缺点

**代码上的区别**
1:get 通过 url 传递参数
2:post 设置请求头 规定请求数据类型
**使用上的区别**
1:post 比 get 安全
(因为 post 参数在请求体中。get 参数在 url 上面)
2:get 传输速度比 post 快 根据传参决定的。
(post 通过请求体传参，后台通过数据流接收。速度稍微慢一些。而 get 通过 url 传参可以直接获取)
3:post 传输文件大理论没有限制 get 传输文件小大概 7-8k ie4k 左右
4:get 获取数据 post 上传数据
(上传的数据比较多 而且上传数据都是重要数据。所以不论在安全性还是数据量级 post 是最好的选择)

### 什么情况会造成跨域？跨域的解决方法有哪些？

由于浏览器的同源政策的限制，只要协议，域名，端口号三者有一个不同，就是不同源，也就是跨域

1. JSONP 解决跨域

原理:动态创建一个 script 标签，利用它的 src 不受同源政策的影响，可以请求第三方服务器的数据
步骤:

```js
// 1.创建script标签
let script = document.createElement("script");
// 2.设置接口地址,并且要带一个回调函数的名称
script.src = "http://localhost:8080?callback=jsonpCallback";
// 3.插入到页面
document.head.appendChild(script);
// 4.定义回调函数来接收请求的数据
function jsonpCallback() {
  //注意  jsonp返回的数据是json对象可以直接使用
  //ajax  取得数据是json字符串需要转换成json对象才可以使用。
}
```

**注意：**jsonp 只能解决 get 的跨域

2. CORS:跨域资源共享

原理:服务器设置`Access-Control-Allow-OriginHTTP`响应头之后，服务器会允许跨域

```
需要后台设置
Access-Control-Allow-Origin: *              //允许所有域名访问
Access-Control-Allow-Origin: http://a.com   //只允许所有域名访问
```

3. 设置 document.domain

原理:相同主域名，不同子域名下的页面。可以设置 document.domain 让它们同域

4. 用 Apache 做转发(逆向代理)，让跨域变成同域

### HTTP 常见状态码

1. 2XX 状态码:表示请求成功
2. 3XX 状态码:重定向
3. 4XX 状态码:请求出错

400:服务器不理解请求的语法
403:服务器拒绝请求
404:服务器未找到请求的资源

4. 5XX 状态码:这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错

```
500 (服务器内部错误) 服务器遇到错误，无法完成请求。

501 (尚未实施) 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。

502 (错误网关) 服务器作为网关或代理，从上游服务器收到无效响应。

503 (服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常，这只是暂时状态。

504 (网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求。

505 (HTTP 版本不受支持) 服务器不支持请求中所用的 HTTP 协议版本。
```

5. 1XX状态码:服务器接收到请求，需要请求者进行下一步操作