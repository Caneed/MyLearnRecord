# http报文

[TOC]

http协议主要由起始行(start line)，头部字段(header)，消息正文(entity)组成。

>其中起始行和头部字段被称为请求头/响应头，称为header，消息正文被称为body，请求、响应可以没有正文但是不可以没有header

## 起始行

起始行一般由 请求方法+url+http版本字段组成

## 请求标头

HTTP 标头（header）允许客户端和服务器通过 HTTP 请求（request）或者响应（response）传递附加信息。一个 HTTP 标头由它的名称（不区分大小写）后跟随一个冒号（:），冒号后跟随它具体的值。(该值之前的空格会被忽略)

根据不同消息上下文，标头分为四种：

- 请求标头：包含有关要获取的资源或客户端或请求资源的客户端的更多信息。
- 响应标头：包含有关响应的额外信息，例如响应的位置或者提供响应的服务器。
- 表示标头：包含资源主体的信息，例如主体的 MIME 类型或者应用的编码/压缩方案。
- 有效负荷标头：包含有关有效载荷数据表示的单独信息，包括内容长度和用于传输的编码。

### 通用标头

通用标头常用的有三个：`Date`,`Cache-Control`,`Connection`

#### Date

>Date可以出现在请求标头和响应标头中，表示：

```http
Wed, 03 Jan 2024 01:36:14 GMT
```

该时间为格林威治时间，比北京时间晚8小时

#### Cache-Control

Cache-Control可取的值:
 - max-age:资源被认为仍然有效的最长时间，与 Expires 不同，这个请求是相对于 request标头的时间，而 Expires 是相对于响应标头。该值用于请求标头
 - s-maxage:重写了max-age和expires,适用于共享缓存，被私有缓存忽略。它用于请求标头
 - max-stale:表示客户端将接受的最大响应时间，以秒为单位。用于响应标头
 - min-fresh:表示客户端希望响应在指定的最小时间内有效。用于响应标头

#### Connection

Connection 决定当前事务（一次三次握手和四次挥手）完成后，是否会关闭网络连接。Connection 有两种，一种是持久性连接，即一次事务完成后不关闭网络连接

```http
Connection: keep-alive
```

另一种则是事务完成后关闭连接

```http
Connection: close
```

#### 其它标头

| 字段名            | 说明                               |
| ----------------- | ---------------------------------- |
| Cache-Control     | 用于控制缓存的行为                 |
| Connection        | 连接管理                           |
| Date              | 创建报文的日期时间（格林威治时间） |
| Pragma            | 报文指令                           |
| Trailer           | 报文末端的首部一览                 |
| Transfer-Encoding | 指定报文主体的编码方式             |
| Upgrade           | 升级为其它协议                     |
| Via               | 代理服务器相关信息                 |
| Warning           | 错误通知                           |


### 实体标头

实体标头是描述消息正文内容的 HTTP 标头。实体标头用于 HTTP 请求和响应中。头部Content-Length、 Content-Language、 Content-Encoding 是实体头。

- Content-Length 实体报头指示实体主体的大小，以字节为单位，发送到接收方。
- Content-Language 实体报头描述了客户端或者服务端能够接受的语言，例如

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

- Content-Encoding 表示对实体使用了哪种编码

实体标头字段:

| 字段名           | 说明                   |
| ---------------- | ---------------------- |
| Allow            | 字段支持的http方法     |
| Content-Encoding | 实体主体适用的编码方式 |
| Content-Language | 实体主体的自然语言     |
| Content-Length   | 实体主体的大小(字节)   |
| Content-Location | 替代对应资源的URI      |
| Content-MD5      | 实体主体的报文摘要     |
| Content-Range    | 实体主体的位置范围     |
| Content-Type     | 实体主体的媒体类型     |
| Expires          | 实体主体的过期时间     |
| Last=Modified    | 资源最后修改时间       |

### 请求标头

- Host

Host指示了服务器的域名和端口号，如果无端口号，则使用协议默认端口号。

```http
Host: localhost:5173
```

- Refer

HTTP Referer 属性是请求标头的一部分，当浏览器向 web 服务器发送请求的时候，一般会带上 Referer，告诉服务器该网页是从哪个页面链接过来的，服务器因此可以获得一些信息用于处理。

```http
Refer: http://localhost:5173/games
```

- Upgrade-Insecure-Requests

Upgrade-Insecure-Requests 是一个请求标头，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应。

```http
Upgrade-Insecure-Requests: 1
```

- If-Modified-Since

设置该请求头说明请求为条件请求，如果在 Last-Modified 指定的时间之后更新了服务器资源，那么服务器会响应200，如果在 Last-Modified 之后没有更新过资源，则返回 304。

```http
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
```

- If-None-Match

设置该请求头说明请求为条件请求，对于 GET 和 HEAD 方法，仅当服务器没有与给定资源匹配的 ETag 时，服务器才会以200状态发送回请求的资源。 对于其他方法，仅当最终现有资源的ETag与列出的任何值都不匹配时，才会处理请求。

```http
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
```

### 内容协商

内容协商指服务器和客户端进行交涉，服务器返回给最适合客户端的资源。

内容协商分为三种:

- 服务器驱动协商：服务器端进行内容协商，根据请求首部字段进行处理
- 客户端驱动协商：客户端进行内容协商
- 透明协商：服务器端和客户端同时进行内容协商。


#### 内容协商的相关请求标头

- Accept:告诉客户端能够理解的MIME类型

>MIME:Multipurpose Internet Mail Extensions 表示描述消息类型的因特网标准。MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据。

MIME类型:
1. 文本文件：text/html,text/plain,text/css,application/xhtml+xml,application/xml
2. 图片文件：image/jpeg,image/gif,image/png
3. 视频文件:video/mpeg,video/quicktime
4. 二进制文件:application/octet-stream,application/zip

一般MIME会和`q`标识一起使用,`q`表示的是权重：

```http
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

分号后加上的`q=?`表示媒体类型的优先级，默认为1，权重高的在前，低的在后


- Accept-Charset:表示服务端处理表单所用的字符集

默认为unknown,常用的有：UTF-8-Unicode,ISO-8859-1-拉丁字母表

- Accept-Language:首部字段 Accept-Language 用来告知服务器用户代理能够处理的自然语言集（指中文或英文等），以及自然语言集的相对优先级。可一次指定多种自然语言集。 和 Accept 首部字段一样，按权重值 q来表示相对优先级。

```http
Accept-Language: en-US,en;q=0.5
```

- 其它请求标头：

| 字段名              | 说明                                      |
| ------------------- | ----------------------------------------- |
| Accept              | 用户代理可以处理的媒体类型                |
| Accept-Charset      | 优先的字符集                              |
| Accept-Encoding     | 内容编码                                  |
| Accept-Language     | 语言                                      |
| Authorization       | web认证信息                               |
| Expect              | 期待服务器的特定行为                      |
| Form                | 用户的电子邮箱地址                        |
| Host                | 记录资源所在服务器                        |
| If-Match            | 比较实体标记                              |
| If-Modified-Since   | 比较资源更新时间                          |
| If-None-Match       | 比较实体标记，和If-Match相反的作用        |
| If-Range            | 资源为更新时发送实体字节的范围请求        |
| If-Unmodified-Since | 比较资源更新时间，和If-Modified-Since相反 |
| Max-Forwards        | 最大传输逐跳数                            |
| Proxy-Authorization | 代理服务器要求客户端的认证信息            |
| Range               | 实体的字节范围请求                        |
| Referer             | 获取请求中URI的原始获取方                 |
| TE                  | 传输编码优先级                            |
| User-Agent          | HTTP客户端程序信息                        |

### 响应标头

#### 响应状态码

- 2XX

| 状态码 | 含义                                                      |
| ------ | --------------------------------------------------------- |
| 200    | 成功响应                                                  |
| 204    | 请求处理成功，无资源返回                                  |
| 206    | 对资源的一部分进行响应，由Content-Range指定范围的实体内容 |

- 3XX

| 状态码 | 含义                                                                             |
| ------ | -------------------------------------------------------------------------------- |
| 301    | 永久性重定向，该状态码表示请求的资源已经重新分配 URI，以后应该使用资源现有的 URI |
| 302    | 临时重定向，此状态码表示请求的资源被分配了新的URI，本次请求使用该URI             |
| 303    | 请求的对应资源存在另一个URI，使用GET方法重定向获取请求的资源                     |
| 304    | 客户端发送附带条件的请求，服务器允许请求资源，但是未满足请求的条件               |
| 307    | 和302含义相同，都是临时重定向                                                    |

- 4XX

| 状态码 | 含义                                                              |
| ------ | ----------------------------------------------------------------- |
| 400    | 请求报文中有语法错误                                              |
| 401    | 发送的请求需要通过HTTP认证（BASIC 认证、DIGEST 认证）的认证信息。 |
| 403    | 请求的资源被服务器拒绝                                            |
| 404    | 资源不存在                                                        |

- 5XX

| 状态码 | 含义                                           |
| ------ | ---------------------------------------------- |
| 500    | 服务器在执行请求时出现错误                     |
| 503    | 服务器在超负荷运转或正在停机维护，无法处理请求 |

#### 标头

- Access-Control-Allow-Origin

表示允许指定的地址进行资源的跨域访问，设置通配符`*`时，表示任何源都可以访问资源，指定地址访问资源时：

```http
Access-Control-Allow-Origin: https://xxxxxxx.org
Vary: Origin
```

在指定地址访问时，还可以设置该标签`Vary`来表示服务器响应将根据原始请求标头的值而有所不同

- Keep-Alive:  Connection 非持续连接的存活时间

```http
Connection: Keep-Alive
Keep-Alive: timeout=5, max=997
```

Keep-Alive有两个参数Keep-Alive 有两个参数，它们是以逗号分隔的参数列表，每个参数由一个标识符和一个由等号 = 分隔的值组成。
- timeout：指示空闲连接必须保持打开状态的最短时间（以秒为单位）。
- max：指示在关闭连接之前可以在此连接上发送的最大请求数。
上面的 HTTP 代码的意思就是限制最大的超时时间是 5s 和 最大的连接请求是 997 个。

- Server:服务器标头包含有关原始服务器用来处理请求的软件的信息。

```http
Server:nginx
```

- Transfer-Encoding:规定了传输报文主体时采用的编码方式：

```http
Transfer-Encoding:chunked
```

- 其它响应头:

| 字段名             | 说明                         |
| ------------------ | ---------------------------- |
| Accept-Ranges      | 是否接受字节范围请求         |
| Age                | 推算资源创建经过时间         |
| ETag               | 资源匹配信息                 |
| Location           | 令客户端重定向指定URI        |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发起请求的时机要求     |
| Server             | HTTP服务器的安装信息         |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器对客户端的认证信息     |
