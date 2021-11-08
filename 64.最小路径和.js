/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * O(mn)的时间 O(n)的空间
 */
var minPathSum = function (grid) {
  const width = grid.length;
  const height = grid[0].length;

  const dpRow = Array.from(grid[0]); // 储存一行dp结果
  /**
   * 1. 初始状态
   * 第一行为向右累加，第一列为向下累加
   * */
  for (let i = 1; i < height; i++) {
    dpRow[i] += dpRow[i - 1];
  }
  for (let i = 1; i < width; i++) {
    // 第一列为向下累加
    dpRow[0] = dpRow[0] + grid[i][0];
    for (let j = 1; j < height; j++) {
      // 2. 状态转移：取 同行 或者 同列 上一个中最小的
      dpRow[j] = grid[i][j] + Math.min(dpRow[j - 1], dpRow[j]);
    }
  }

  return dpRow[height - 1];
};
// @lc code=end

// const grid = [
//   [1, 3, 1],// [1, 4, 5]
//   [1, 5, 1],
//   [4, 2, 1],
// ];
// const grid = [[1,2,3],[4,5,6]];
// console.log(minPathSum(grid));
