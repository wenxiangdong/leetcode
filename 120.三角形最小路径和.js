/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 初始给个边界0
  let lastDp = [0];
  let dp = [];
  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i];
    for (let j = 0; j < row.length; j++) {
      dp[j] =
        row[j] +
        Math.min(
          lastDp[j] ?? Number.MAX_SAFE_INTEGER,
          lastDp[j - 1] ?? Number.MAX_SAFE_INTEGER // 越界使用最大值代替
        );
    }
    lastDp = dp;
    dp = [];
  }
  return Math.min(...lastDp);
};
// @lc code=end
// const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// console.log(minimumTotal(triangle));
