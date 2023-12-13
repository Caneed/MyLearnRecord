# 正则表达式

[TOC]

## 创建正则表达式

> 有三种创建正则表达式的方法：字面量创建；首个参数为字面量的构造函数创建；首个参数为字符串的构造函数创建。

```ts
const reg: RegExp = /ab+c/i
const reg1: RegExp = new RegExp('ab+c', 'i')
const reg2: RegExp = new RegExp(/ab+c/, 'i')
```

## 构造函数`constructor`

> RegExp()用于创建正则表达式对象，此对象用于将文本和模式进行匹配：

使用字面量，构造函数和工厂模式创建正则表达式对象：

```
/pattern/flags
new RegExp(pattern, [, flags])
RegExp(pattern, [, flags])
```

### 参数

- pattern:正则表达式的文本，ES5 之前正则表达式的构造函数只接受字符串作为文本参数，ES5 之后不仅接受字符串，而且接受字面量作为参数。
- flags:正则表达式的标志。

### Flags

flags 接受以下任何字符的组合（简单介绍）:

1. g(全局匹配)：找到所有符合条件的字符串，而不是找到第一个之后就停止。
2. i(忽略大小写)：匹配时忽略字符的大小写，如果和`u`搭配使用的话，就使用 Unicode 大小写折叠。
3. m(多行匹配)：开启多行匹配意味着将字符串中每一行的开头和结尾`\n或者\r分隔`
4. s(点号匹配所有字符):允许`.`匹配新的行。
5. u(Unicode):开启完整的 Unicode 支持。
6. y(“粘滞”模式):在文本你的确切位置搜索。

## 属性

### RegExp.prototype.dotAll

dotAll 属性表示是否使用了后缀修饰符`/s`，返回一个布尔值。

```ts
const reg: RegExp = new RegExp('abc')
console.log(reg.dotAll) //false
const reg1: RegExp = new RegExp('abc', 's')
console.log(reg1.dotAll) //true
```

### RegExp.prototype.flags

flags 属性返回当前正则表达式对象的修饰符

```ts
const reg: RegExp = new RegExp('abc', 's')
const reg1: RegExp = new RegExp('abc', 'gu')
const reg2: RegExp = new RegExp('abc')
console.log(reg.flags) //s
console.log(reg1.flags) //gu
console.log(reg2.flags) //不输出
```

### Regexp.prototype.global

global 作为正则表达式对象的只读属性，返回当前是否使用了`g`修饰符

```ts
const reg: RegExp = new RegExp('abc', 'g')
const reg1: RegExp = new RegExp('abc', 's')
console.log(reg.global) //true
console.log(reg1.global) //false
```

### RegExp.prototype.ignoreCase

ignoreCase 表示正则表达式是否使用了`i`修饰符

```ts
const reg: RegExp = new RegExp('abc', 'i')
const reg1: RegExp = new RegExp('abc')
console.log(reg.ignoreCase) //true
console.log(reg1.ignoreCase) //false
```

### RegExp.prototype.source

source 返回当前正则表达式的字面量（不包含修饰符）

```ts
const reg: RegExp = /abc/i
const reg2: RegExp = /cde/gi

console.log(reg.source) //abc
console.log(reg2.source) //cde
```

### RegExp.prototype.sticky

sticky 返回当前正则表达式是否开启粘滞模式

```ts
const reg: RegExp = /abc/y
const reg1: RegExp = /abc/

console.log(reg.sticky) //true
console.log(reg1.sticky) //false
```

### RegExp.prototype.Unicode

Unicode 返回当前正则表达式是否开启完整的 Unicode 支持

```ts
const reg: RegExp = /abc/u
const reg1: RegExp = /abc/

console.log(reg.unicode) //true
console.log(reg1.unicode) //false
```

## 实例方法

### RegExp.prototype.exec()

exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null

> (method) RegExp.exec(string: string): RegExpExecArray | null

```ts
console.log(/\d/.exec('12345')) //[ '1', index: 0, input: '12345', groups: undefined ]
console.log(/abc/d.exec('abc'))
// [
//     'abc',
//     index: 0,
//     input: 'abc',
//     groups: undefined,
//     indices: [ [ 0, 3 ], groups: undefined ]
//   ]
```

**返回值类型 RegExpExecArray：**

- index:匹配到的字符串索引
- input:匹配的原始字符串
- groups:捕获组对象,未定义时返回 undefined
- indices:可选属性,在设置 d 修饰符时存在,是一个数组，表示捕获到的结果边界

>在设置了 global 或 sticky 标志位的情况下（如 /foo/g 或 /foo/y），JavaScript RegExp 对象是有状态的。它们会将上次成功匹配后的位置记录在 lastIndex 属性中。使用此特性，exec() 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， String.prototype.match() 只会返回匹配到的结果。