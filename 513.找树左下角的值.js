/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const queue = [[root]];
  let index = 0;
  while (queue[index]?.length) {
    const nodes = queue[index];
    const newLevel = nodes.reduce(
      (acc, node) => [...acc, node.left, node.right].filter(Boolean),
      []
    );
    if (newLevel.length) {
      index++;
      queue[index] = newLevel;
    } else {
      break;
    }
  }
  return queue[index][0].val;
};
// @lc code=end