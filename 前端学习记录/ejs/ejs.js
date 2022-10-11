const ejs = require('ejs')
const express = require('express')
const app = express()
const port = 3000

let str = `<% if (user) { %>
  <h1><%= user.name %></h1>
<% } %>`
let data = { user: { name: '李四' } }
let dt={
 info:[{name:'111'},{name:'222'},{name:'333'}]
}
app.get('/', (req, res) => {
  
  ejs.renderFile('temp.ejs',data,{},(err,str)=>{
    if(err)console.log(err);
    console.log(str);
    res.send(str)
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))