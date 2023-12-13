# 断言

[TOC]

## 边界型断言

断言的组成之一是边界。对于文本、词或模式，边界可以用来表明它们的起始或终止部分

### ^和$

- `^`匹配输入的开头，如果开启了多行匹配，在换行符后的字符也能匹配到

```ts
console.log(/^A/.test('Abc')) //true
console.log(/^A/.test('abc')) //false
console.log(/^A/m.test('abc\nAbc')) //true
```

- `$`匹配输入的结束，开启多行匹配也能匹配到换行符之前的字符

```ts
console.log(/A$/.test('bcA')) //true
console.log(/A$/.test('bca')) //false
console.log(/A$/m.test('bca\nbcA')) //true
console.log(/A$/m.test('bcA\nbca')) //true
```

### \b 和\B

- `\b`匹配单词的边界，指该字符的前面或者后面没有其它字符就会被匹配

```ts
console.log(/\bm/.test('moon')) //true
console.log(/\bm/.test('nmoon')) //false
console.log(/m\b/.test('noom')) //true
console.log(/m\b/.test('noomn')) //false
```

> /\bm/表示如果 m 之前没有字符就会匹配，/m\b/表示如果 m 之后没有字符就会被匹配。
> 如果目标单词的前或者后存在符号，\b 不会更改它的匹配结果

```ts
console.log(/\bm/.test('.*&^%$#@!()":;[]{}?moon')) //true
console.log(/m\b/.test('noom.*&^%$#@!()":;[]{}?')) //true
```

- `\B`匹配非单词的边界，和`\b`相反

```ts
console.log(/\Bm/.test('moon')) //false
console.log(/\Bm/.test('nmoon')) //true
console.log(/m\B/.test('noom')) //false
console.log(/m\B/.test('noomn')) //true
```

> /\Bm/表示如果 m 之前有字符就会匹配，/m\B/表示如果 m 之后有字符就会被匹配。
> 如果目标单词的前或者后存在符号，\B 不会更改它的匹配结果

```ts
console.log(/\Bm/.test('.*&^%$#@!()":;[]{}?moon')) //false
console.log(/m\B/.test('noom.*&^%$#@!()":;[]{}?')) //false
```

## 其它断言

### 先行断言 x(?=y)

> 先行断言 x(?=y)表示 x 被 y 跟随时匹配 x，匹配结果不包含跟随的字符串

```ts
console.log(/abc(?=def)/.test('abcbgxx')) //false
console.log(/abc(?=def)/.test('abcdef')) //true
```

### 先行否定断言 x(?!y)

> 先行否定断言 x(?!y)表示 x 不被 y 跟随时匹配 x

```ts
console.log(/abc(?!def)/.test('abcbgxx')) //true
console.log(/abc(?!def)/.test('abcdef')) //false
```

### 后行断言(?<=y)x

> (?<=y)x 表示 x 之前为 y 时匹配 x

```ts
console.log(/(?<=abc)def/.test('abcdef')) //true
console.log(/(?<=abc)def/.test('abcdec')) //false
```

### 后行否定断言(?<!y)x

> (?<!y)x 表示 x 之前不为 y 时匹配 x

```ts
console.log(/(?<!abc)def/.test('cbadef')) //true
console.log(/(?<!abc)def/.test('abcdef')) //false
```

## 练习

```ts
let buggyMultiline: string = `tey, ihe light-greon apple
tangs on ihe greon traa`

buggyMultiline = buggyMultiline.replace(/^t/gm, 'h')
buggyMultiline = buggyMultiline.replace(/i(?=he)/g, 't')
buggyMultiline = buggyMultiline.replace(/(?<=gre)o/g, 'e')
buggyMultiline = buggyMultiline.replace(/aa$/, 'ee')

console.log(buggyMultiline)
// hey, the light-green apple
// hangs on the green tree
```
