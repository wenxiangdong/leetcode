/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   const dp = new Array(m).fill(new Array(n).fill(1));

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
//     }
//   }

//   return dp[m - 1][n - 1];
// };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @optimize 使用O(n)空间
 */
var uniquePaths = function (m, n) {
  // 1. 初始状态，第一行为所有1，第一列也为所有1
  const dp = new Array(n).fill(1);  // 用 dp 存储每一行的动态规划结果，同时也能表示上一行

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      dp[j] = dp[j] + dp[j - 1];
    }
  }

  return dp[n - 1];
};
// @lc code=end
