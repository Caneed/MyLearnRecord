"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
// 邻接表的方式
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertex = [];
        this.color = [];
        this.edges = new Map();
    }
    //   添加顶点
    Graph.prototype.addVertex = function (vertex) {
        // 顶点数组中添加顶点
        this.vertex.push(vertex);
        // map.set接受key和value，value先设置为空
        this.edges.set(vertex, []);
    };
    //   传入两个顶点，分别在各自的邻接表中添加上各自的引用，两个点组成一个边
    Graph.prototype.addEdges = function (startVertex, endVertex) {
        var _a, _b;
        (_a = this.edges.get(startVertex)) === null || _a === void 0 ? void 0 : _a.push(endVertex);
        (_b = this.edges.get(endVertex)) === null || _b === void 0 ? void 0 : _b.push(startVertex);
    };
    //   转换成字符串
    Graph.prototype.toString = function () {
        //1.定义字符串，保存最终结果
        var resultString = ""; //2.遍历所有的顶点以及顶点对应的边
        for (var i = 0; i < this.vertex.length; i++) {
            //遍历所有顶点
            resultString += this.vertex[i] + "-->  ";
            var vEdges = this.edges.get(this.vertex[i]);
            for (var j = 0; j < vEdges.length; j++) {
                //遍历字典中每个顶点对应的数组
                resultString += vEdges[j] + " ";
            }
            resultString += "\n";
        }
        return resultString;
    };
    Graph.prototype.initColor = function () {
        var colors = [];
        for (var i = 0; i < this.vertex.length; i++) {
            colors.push("white");
        }
        return colors;
    };
    //   基于队列可以简单地实现广度优先搜索算法：
    //   首先创建一个队列queue（尾部进，首部出）；
    //   指定第一个要开始遍历的顶点，将它标注为灰色，并将放入队列中；
    //   循环遍历队列中的元素，只要队列非空，就执行以下操作：
    //   先将灰色的顶点从队列首部取出；
    //   取出后，将该顶点的所有未被访问过（白色）的相邻顶点依次从队列的尾部加入队列，并变为灰色。以此保证，灰色的相邻顶点不重复加入队列；
    //   顶点的全部相邻节点加入队列后，变为黑色，在下一次循环中被移除队列外；
    Graph.prototype.BFS = function (root) {
        // 先初始化所有顶点的颜色
        this.color = this.initColor();
        var queue = [];
        var res = [];
        // 找到root所在的颜色队列的索引并将颜色改为灰色
        this.color[this.vertex.findIndex(function (item) { return item === root; })] = "gray";
        queue.push(root);
        while (queue.length) {
            // 创建变量接收刚从队列中弹出的顶点
            var vertex = queue.shift();
            //   获取该顶点的邻居顶点
            var vNeighbors = this.edges.get(vertex);
            var _loop_1 = function (i) {
                var node = vNeighbors[i];
                if (this_1.color[this_1.vertex.findIndex(function (item) { return item === node; })] ===
                    "white") {
                    this_1.color[this_1.vertex.findIndex(function (item) { return item === node; })] =
                        "gray";
                    queue.push(node);
                }
            };
            var this_1 = this;
            //遍历邻居结点
            for (var i = 0; i < vNeighbors.length; i++) {
                _loop_1(i);
            }
            res.push(vertex);
            this.color[this.vertex.findIndex(function (item) { return item === root; })] = "black";
        }
        return res;
    };
    Graph.prototype.dfsVisit = function (vertex, colors, res) {
        // 将顶点设置为灰色
        colors[this.vertex.findIndex(function (item) { return item === vertex; })] = "gray";
        // 将顶点置入队列
        res.push(vertex);
        // 访问相邻顶点
        var vNeighbors = this.edges.get(vertex) || [];
        var _loop_2 = function (i) {
            var node = vNeighbors[i]; //判断相邻顶点是否为白色，若为白色，递归调用函数继续访问
            if (colors[this_2.vertex.findIndex(function (item) { return item === node; })] == "white") {
                this_2.dfsVisit(node, colors, res);
            }
        };
        var this_2 = this;
        for (var i = 0; i < vNeighbors.length; i++) {
            _loop_2(i);
        }
    };
    Graph.prototype.DFS = function (root) {
        var colors = this.initColor();
        var res = [];
        this.dfsVisit(root, colors, res);
        return res;
    };
    return Graph;
}());
exports.Graph = Graph;
