// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
/*
* Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 如果前序和中序长度都为0直接返回空
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }
  // 找到在中序遍历中根结点的位置
  const index = inorder.findIndex(item => item === preorder[0])
  // 通过中序遍历中根结点的位置锁定中序遍历中左右子结点部分的位置
  // 左子结点的部分在根结点左侧
  const left = inorder.slice(0, index)
  // 右子结点的部分在右侧
  const right = inorder.slice(index + 1)
  return {
    val: preorder[0],
    // 继续把本次左节点当作根来递归调用并在方法中传入它前序和中序的结果
    left: buildTree(preorder.slice(1, index + 1), left),
    // 继续把本次右节点当作根来递归调用并在方法中传入它前序和中序的结果
    right: buildTree(preorder.slice(index + 1), right)
  }
};
