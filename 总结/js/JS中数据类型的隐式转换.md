# JS 中的隐式转换

[TOC]

### `ToPrimitive`方法

`ToPrimitive`方法是 JS 中每个值都隐含自带的方法，它用来将每个值转换为基本数据类型，如果这个值本身就为基本类型，则返回它本身

```js
ToPrimitive(value, type);
```

