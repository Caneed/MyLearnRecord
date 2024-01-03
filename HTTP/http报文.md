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
