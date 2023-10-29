# `keyof` 和 `typeof`

[TOC]

## keyof

keyof 可以提取对象类型的 key

```typescript
interface Point {
  x: number
  y: number
}

type P = keyof Point

const pointX: P = "x"
const pointY: P = "y"
```

keyof 将上面接口中的键提取，其实`type P = keyof Point`相当于`type P = 'x'|'y'`

### 具有索引签名的 keyof

当创建的类型具有索引签名时，keyof 返回的类型就是索引签名的约束：

```typescript
interface Arr {
  [key: number]: string
}

type A = keyof Arr

const a: A = 1
const b: A = 1
```

这里索引签名约束了 key 的类型为 number 所以 keyof Arr 返回的就是 number 类型，A 类型其实就等于`type A = number`

**如果索引签名类型为 string 类型会出现特殊情况：**

```typescript
interface Arr {
  [key: string]: string
}

type A = keyof Arr

const a: A = 1
const b: A = 1
const c: A = "1"
```

> 当索引签名类型为 string 时，返回的 type 为 number|string 类型，这是因为这是因为 JavaScript 对象键总是被强制转换为字符串，所以 obj[0] 总是与 obj["0"] 相同

## typeof 运算符

ts 中的 typeof 运算符可以用来引用变量或者属性的类型：

```typescript
let s: string = "hello"
let n: typeof s
```

上面的代码其实相当于`let n:string`

**TS 也提供了 ReturnType<T>方法来进行类型的返回：**

```typescript
type Predicate = (x: string) => boolean
type A = ReturnType<Predicate>

const a: A = false
```

> 此处的 A 类型相当于`type A=boolean`

ReturnType 接收接口或者是函数的返回值的类型，此处接口返回的是 boolean 类型，所以 ReturnType 接收到了 Boolean 类型

typeof 作为 ReturnType 中泛型时它接收接口或者是函数中所有返回值

```typescript
function returnString() {
  return { a: 1, b: 2 }
}

type A = ReturnType<typeof returnString>

const a: A = { a: 3, b: 4 }
```

> 这里的 A 类型相当于：`type A = {a:number; b:number}`
