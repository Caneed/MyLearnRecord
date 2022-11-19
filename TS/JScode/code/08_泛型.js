(function () {
    function fn(a) {
        return a;
    }
    fn(10);
    fn('hello');
    function fn2(a, b) {
        console.log(a);
        return b;
    }
    fn2(10, 'hello');
    fn2(10, 'hello');
})();
