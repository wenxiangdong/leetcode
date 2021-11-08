/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 * 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
 * n = 2^a + 3^b + 5^c
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n <= 0) {
    return false;
  }
  const factors = [2, 3, 5];
  for (let factor of factors) {
    while(n % factor === 0) {
      n = n / factor;
    }
  }
  return n === 1;
};
// @lc code=end

