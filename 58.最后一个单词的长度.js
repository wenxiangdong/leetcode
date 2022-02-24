/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lastLength = 0;
  let curLength = 0;
  for (let char of s) {
    if (char !== ' ') {
      curLength++;
    } else if (curLength) {
      lastLength = curLength;
      curLength = 0;
    }
  }
  return curLength || lastLength;
};
// @lc code=end

// console.log(lengthOfLastWord('aaaa aaaa  aaa'));