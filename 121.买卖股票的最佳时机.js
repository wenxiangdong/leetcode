/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) {
    return 0;
  }
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    profit = Math.max(cur - min, profit);
    min = Math.min(cur, min);
  }
  return profit;
};
// @lc code=end

