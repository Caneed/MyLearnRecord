const express = require('express')
const app = express()
const port = 3000
const ejs=require('ejs')


  phone={item:[{
    name: 'XiaoMi CiVi 2',
    pic: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261921_a1b840c267bd26bcf4dc654d52f259e5.png?thumb=1&w=400&h=400&f=webp&q=90',
    price: '2399元'
  }, {
    name: 'Xiaomi MIX Fold2',
    price: '8999元',
    pic: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a687e796bb4879cd0e93867177f800da.png?thumb=1&w=400&h=400&f=webp&q=90'
  },
  {
    name: 'Redmi K50至尊版',
    price: '2999元',
    pic: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208101511_488638d8f8d5dbcf3b66cd82703ecfb9.png?thumb=1&w=400&h=400&f=webp&q=90'
  }]}
  computer= {item:[
    {
      name: 'Redmi G Pro 游戏本',
      price: '8999元',
      pic: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0408c24b677c7fe8b3cc402ec062334.png?thumb=1&w=400&h=400&f=webp&q=90'
    },
    {
      name: 'Redmi Book Pro 15 2022',
      price: '5599元',
      pic: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f8abb2bc3947c4679e3f1b2aafc28c0.jpg?thumb=1&w=400&h=400&f=webp&q=90'
    },
    {
      name: 'Redmi Book Pro 14 2022',
      price: '5399元',
      pic: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3c300330221ad788569e4fb1e6f932f.jpg?thumb=1&w=400&h=400&f=webp&q=90'
    }
  ]}
  headPhone= {item:[
    {
      name: 'Xiaomi Buds 4 Pro',
      price: '1069元',
      pic: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=400&h=400&f=webp&q=90'
    },
    {
      name: 'Xiaomi Buds 3 Pro',
      price: '569元',
      pic: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211422_ce41ed00fe7fb79df35101222880121d.png?thumb=1&w=400&h=400&f=webp&q=90'
    },
    {
      name: 'Xiaomi Buds 3',
      price: '299元',
      pic: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b271a074e087848357aa61ae665b214.jpg?thumb=1&w=400&h=400&f=webp&q=90'
    }
  ]}
app.get('/', (req, res) => {
  ejs.renderFile('./index.html',headPhone,{},(err,data)=>{
    if(err)console.log(err);
    res.send(data)
  })
})
app.get ('/phone_get',(req,res)=>{
  ejs.renderFile('./index.ejs',phone,{},(err,data)=>{
    if(err)console.log(err);
    console.log(data);
    res.send(data)
  })
})
app.get ('/computer_get',(req,res)=>{
  ejs.renderFile('./index.ejs',computer,{},(err,data)=>{
    if(err)console.log(err);
    
    res.send(data)
  })
})
app.get ('/headPhone_get',(req,res)=>{
  ejs.renderFile('./index.ejs',headPhone,{},(err,data)=>{
    if(err)console.log(err);
    res.send(data)
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))