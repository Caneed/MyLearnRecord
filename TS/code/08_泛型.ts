(function () {
  function fn<T>(a: T): T {
    return a
  }

  fn(10)
  fn<string>('hello')

  function fn2<T,K>(a:T,b:K):K{
    console.log(a);
    return b
  }
  fn2(10,'hello')
  fn2<number,string>(10,'hello')
})();
