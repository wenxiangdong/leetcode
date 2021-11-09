/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  /**
   * dp[i][j] 表示 最小需要k步将 word1[0..i] 转换成 word2[0..j]
   * dp[i][j] = min(
   *  dp[i - 1][j] + 1, // word1[0, i-1] 转换成 word2[0..j], 再加一步 删除 word[i]
   *  dp[i][j - 1] + 1, // word1[0, i] 转换成 word2[0..j-1], 再加一步，增加 word2[j]
   *  dp[i - 1][j - 1] + (word1[i] === word2[j] ? 0 : 1) // word1[0..i-1] 转成 word2[0..j-1], 若word1[i]与word2[j]不相等，修改word1[i]
   * )
   * 其实应该从题目里说有三种修改方式，就应该想到有状态转移有三种大分支
   */

  /**
   * dp 数组多一行一列表示边界
   * */
  const dp = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0));

  /**
   * 初始条件
   * 边界：分别是 word1为空和word2为空
   */
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }

  /** 开始状态转换 */
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
      );
    }
  }

  return dp[word1.length][word2.length];
};
// @lc code=end
