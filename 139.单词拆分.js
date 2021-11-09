/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length);
  /**
   * dp[i] 表示 dp[0..i] 能否符合
   * dp[i] = wordDict.some(word => dp[i - word.length] && s[i - word.length, i + 1] === word);
   */
  for (let i = 0; i < s.length; i++) {
    dp[i] = wordDict.some((word) => {
      const sliced = s.slice(i - word.length + 1, i + 1);
      return (dp[i - word.length] ?? true) && (i < word.length - 1 ? false : sliced === word);
    });
  }
  return dp[s.length - 1];
};
// @lc code=end

// const s = "leetcode",
//   wordDict = ["leet", "code"];
// const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
// console.log(wordBreak(s, wordDict));
