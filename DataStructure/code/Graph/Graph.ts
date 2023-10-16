// 邻接表的方式
export class Graph<T> {
  // 用数组定义顶点
  public vertex: T[];
  //   用map接收边，其中key是顶点，value是顶点连接的边
  public edges: Map<T, T[]>;
  public color: color[];
  constructor() {
    this.vertex = [];
    this.color = [];
    this.edges = new Map();
  }
  //   添加顶点
  public addVertex(vertex: T) {
    // 顶点数组中添加顶点
    this.vertex.push(vertex);
    // map.set接受key和value，value先设置为空
    this.edges.set(vertex, []);
  }
  //   传入两个顶点，分别在各自的邻接表中添加上各自的引用，两个点组成一个边
  public addEdges(startVertex: T, endVertex: T) {
    this.edges.get(startVertex)?.push(endVertex);
    this.edges.get(endVertex)?.push(startVertex);
  }
  //   转换成字符串
  public toString() {
    //1.定义字符串，保存最终结果
    let resultString = ""; //2.遍历所有的顶点以及顶点对应的边
    for (let i = 0; i < this.vertex.length; i++) {
      //遍历所有顶点
      resultString += this.vertex[i] + "-->  ";
      let vEdges = this.edges.get(this.vertex[i]);
      for (let j = 0; j < vEdges!.length; j++) {
        //遍历字典中每个顶点对应的数组
        resultString += vEdges![j] + " ";
      }
      resultString += "\n";
    }
    return resultString;
  }
  public initColor(): color[] {
    let colors: color[] = [];
    for (let i = 0; i < this.vertex.length; i++) {
      colors.push("white");
    }
    return colors;
  }
  //   基于队列可以简单地实现广度优先搜索算法：
  //   首先创建一个队列queue（尾部进，首部出）；
  //   指定第一个要开始遍历的顶点，将它标注为灰色，并将放入队列中；
  //   循环遍历队列中的元素，只要队列非空，就执行以下操作：
  //   先将灰色的顶点从队列首部取出；
  //   取出后，将该顶点的所有未被访问过（白色）的相邻顶点依次从队列的尾部加入队列，并变为灰色。以此保证，灰色的相邻顶点不重复加入队列；
  //   顶点的全部相邻节点加入队列后，变为黑色，在下一次循环中被移除队列外；
  public BFS(root: T): T[] {
    // 先初始化所有顶点的颜色
    this.color = this.initColor();
    let queue: T[] = [];
    let res: T[] = [];
    // 找到root所在的颜色队列的索引并将颜色改为灰色
    this.color[this.vertex.findIndex((item: T) => item === root)] = "gray";
    queue.push(root);
    while (queue.length) {
      // 创建变量接收刚从队列中弹出的顶点
      let vertex: T = queue.shift()!;
      //   获取该顶点的邻居顶点
      let vNeighbors = this.edges.get(vertex);
      //遍历邻居结点
      for (let i = 0; i < vNeighbors!.length; i++) {
        const node = vNeighbors![i];
        if (
          this.color[this.vertex.findIndex((item: T) => item === node)] ===
          "white"
        ) {
          this.color[this.vertex.findIndex((item: T) => item === node)] =
            "gray";
          queue.push(node);
        }
      }
      res.push(vertex);
      this.color[this.vertex.findIndex((item: T) => item === root)] = "black";
    }
    return res;
  }

  public dfsVisit(vertex: T, colors: color[], res: T[]) {
    // 将顶点设置为灰色
    colors[this.vertex.findIndex((item: T) => item === vertex)] = "gray";
    // 将顶点置入队列
    res.push(vertex);
    // 访问相邻顶点
    let vNeighbors = this.edges.get(vertex) || [];
    for (let i = 0; i < vNeighbors.length; i++) {
      let node = vNeighbors[i]; //判断相邻顶点是否为白色，若为白色，递归调用函数继续访问
      if (
        colors[this.vertex.findIndex((item: T) => item === node)] == "white"
      ) {
        this.dfsVisit(node, colors, res);
      }
    }
  }
  public DFS(root: T): T[] {
    let colors = this.initColor();
    let res: T[] = [];
    this.dfsVisit(root, colors, res);
    return res;
  }
}

type color = "white" | "gray" | "black";
