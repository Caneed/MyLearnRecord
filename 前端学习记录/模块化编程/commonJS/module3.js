// module3向外暴露


exports.foo = function () {
  console.log('module3暴露foo');
}


exports.bar=function(){
  console.log('module3暴露bar');
}

exports.arr=[1,2,3,4,1,2,3,5,67,42,2,4]