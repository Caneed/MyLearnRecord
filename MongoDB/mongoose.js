const mongoose = require('mongoose')

// 第一种
// mongoose.connect('mongodb://localhost:27017',err=>{
//   if(err)console.log(err);
//   console.log('连接成功');
// });

// // 第二种
// mongoose.connect('mongodb://localhost:27017').then(res=>{
//   console.log('连接成功');
// })


// 第三种
mongoose.connect('mongodb://localhost:27017/test')
const db = mongoose.connection
db.on('err', (err) => { console.log(err); })
db.on('open', () => {
})

// 创建一个规范
let schema = mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
});


// 创建一个模型，传入模型名，规范，集合名
const userModel = mongoose.model('userModel', schema, 'users')

// 实例化模型，创建条目
let user1 = new userModel({
  name: '张三', age: 18, sex: 'male'
})
// console.log(user1.name);

// // 添加方法
// schema.methods.walk=function(){
//   console.log(this.name+'is walking');
// }


// // 保存到数据库
// user1.save((err, res) => {
//   if (err) return console.error(err)
//   console.log(res);
// })

// // 保存的第二种方法
// userModel.create({
//   name: '李四',
//   age: 20,
//   sex: 'female'
// }, (err, doc) => {
//   if (err) return console.error(err)
//   console.log(doc);
// })


// userModel.create({
//   name: '王五',
//   age: 30,
//   sex: 'male'
// })
// .then(doc => { console.log(doc); })
// .catch(err => { console.log(err); })