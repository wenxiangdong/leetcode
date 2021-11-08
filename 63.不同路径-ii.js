/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // dp[i][j] = grid[i][j] === 1 ? 0 : grid[i][j-1] + grid[i-1][j];
  const width = obstacleGrid.length;
  const height = obstacleGrid[0].length;
  // 初始，起点应该根据 (0,0) 是否有路确定
  const dp = Array(height).fill(0);
  if (obstacleGrid[0][0] === 0) {
    dp[0] = 1;
  }
  /** 开始遍历 */
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      dp[j] = obstacleGrid[i][j] === 1 ? 0 : (dp[j - 1] ?? 0) + dp[j];
    }
  }
  return dp[height - 1];
};
// @lc code=end

// console.log(
//   uniquePathsWithObstacles([
//     [0, 1, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ])
// );
