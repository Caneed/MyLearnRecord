const superStar: Record<string, number | string | Array<string>> = {
  name: "大明星",
  age: 30,
  likes: ["dance", "drug", "music", "rap", "alcohol"],
}

// 创建代理对象
const agent: Record<string, any> = new Proxy(superStar, {
  get(target, key, receiver) {
    const result = Reflect.get(target, key, receiver)
    console.log("get")
    return result
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    console.log("set")
    return result
  },
})

agent.name = "小明星"
agent.likes.push("pocky")
console.log(superStar)
// set
// get
// {
//   name: '小明星',
//   age: 30,
//   likes: [ 'dance', 'drug', 'music', 'rap', 'alcohol', 'pocky' ]
// }