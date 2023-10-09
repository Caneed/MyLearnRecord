export class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = this.right = null;
  }
}

export class BinarySearchTree<T> {
  public root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  /**
   * 结点值比较，相等返回0，前<后返回1，后<前返回-1
   * @param a 结点值
   * @param b 结点值
   * @returns 返回数字
   */
  public compareFn(a: T, b: T): number {
    if (a === b) return 0;
    return a < b ? 1 : -1;
  }

  /**
   * 插入结点
   * @param value 插入的结点的值
   */
  public insert(value: T) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  /**
   * 比较值和当前结点值的大小，决定调用左孩子做递归还是右孩子做递归
   * @param node 当前遍历到的结点
   * @param value 要插入结点的值
   */
  public insertNode(node: TreeNode<T>, value: T) {
    if (this.compareFn(value, node.value) === -1) {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this.insertNode(node.right, value);
      }
    } else {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this.insertNode(node.left, value);
      }
    }
  }

  /**
   * 中序遍历
   */
  public inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  /**
   * 中序遍历函数
   * @param node 从该结点开始遍历
   */
  public inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  /**
   * 前序遍历调用
   */
  public preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  /**
   * 前序遍历函数
   * @param node 从该结点遍历
   */
  public preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  /**
   * 后序遍历的调用
   */
  public postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  /**
   * 后序遍历函数
   * @param node 从该结点开始遍历
   */
  public postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }

  /**
   * 调用返回最小值的函数
   * @returns 最小值
   */
  public min() {
    return this.minValue(this.root);
  }

  /**
   * 找最小值的函数
   * @param node 从该结点遍历
   * @returns 值
   */
  public minValue(node: TreeNode<T> | null): T {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current!.value;
  }

  /**
   * 调用返回最大值的函数
   * @returns 最大值
   */
  public max() {
    return this.maxValue(this.root);
  }

  /**
   * 返回最大值
   * @param node 从该结点开始遍历
   * @returns 值
   */
  public maxValue(node: TreeNode<T> | null): T | null {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current!.value;
  }

  public search(value: T) {
    console.log(this.searchNode(this.root, value))
  }
  public searchNode(node: TreeNode<T> | null, value: T) {
    if (node === null) {
      return false;
    }
    if (this.compareFn(node.value, value) === 0) {
      return true;
    } else if (this.compareFn(node.value, value) === -1) {
      return this.searchNode(node.left, value);
    } else if (this.compareFn(node.value, value) === 1) {
      return this.searchNode(node.right, value);
    }
  }
}
