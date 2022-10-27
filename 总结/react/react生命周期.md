# react生命周期

[TOC]

### react挂载阶段

1. constructor:构造函数，通常在构造函数中初始化state状态对象和绑定this
2. getDerivedStateFromProps(nextProps,prevProps):是一个静态方法，当收到新的属性想要去修改state的时侯，可以使用此方法
3. render:render是纯函数返回的是要渲染的虚拟DOM
4. componentDidMount:表示组件挂载完成，在它调用之后我们可以获取并操作DOM结点

### 更新阶段

1. getDerivedStateFromProps:更新阶段也会调用
2. shouldComponentUpdate(nextProps,prevProps):传入的两个值分别是新的state和前一个state，会返回一个布尔值，布尔值为true表示会触发重新渲染，false表示不会触发，默认返回的是true
3. render:更新阶段也会触发此函数
4. getSnapshotBeforeUpdate(nextProps,prevProps):此方法在render之后，componentDidUpdate之前调用，返回值是一个快照，它会作为componentDidUpdate的第三个参数传入，此生命周期必须和componentDidUpdate一起使用
5. componentDidUpdate(prevProps, prevState, snapshot)

### 卸载阶段

1. componentWillUnmount:当组件被卸载或者被销毁时就会调用

### 总体的生命周期流程
挂载
constructor=>getDerivedStateFromProps=>render=>componentDidMount
更新
getDerivedStateFromProps=>shouldComponentUpdate=>render=>getSnapshotBeforeUpdate=>componentDidUpdate
卸载
componentWillUnmount