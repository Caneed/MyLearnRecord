new Vue({
    el: '#app',
    data: {
        name: '张三',
        age: 18,
        sex: 'male'
    },
    template: `
      <div>
      <div>name:{{ this.name }}</div>
      <div>age:{{ this.age }}</div>
      <div>sex:{{ this.sex }}</div>
      </div>`
})