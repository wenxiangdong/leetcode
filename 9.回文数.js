/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 使用字符串
  // return x.toString() === x.toString().split("").reverse().join("");

  // 不使用字符串
  /**
   * < 0 不考虑
   * 最后一位是0，不考虑（除了0）
   */
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  /**
   * 不停地截取后半段的反转
   * 结束条件为：截取的已经大于或等于剩下的
   */
  let reversedNumber = 0;
  while(reversedNumber < x) {
    const r = x % 10;
    reversedNumber = reversedNumber * 10 + r;
    x = Math.floor(x / 10);
  }
  /**
   * 偶数位情况下，直接比较相相等
   * 奇数位情况下，需要去掉一位比较
   */
  return x === reversedNumber || x === Math.floor(reversedNumber / 10)
};
// @lc code=end
