/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return [];
  }
  let res = [];
  // 初始肯定是一个左括号
  const queue = [{
    str: '(',
    left: n - 1,
    right: n,
  }];

  while(queue.length) {
    const {str, left, right} = queue.shift();
    if (left === 0 && right === 0) {
      res.push(str);
    } else if (left === right) {
      // 只能加一个左
      queue.push({
        str: str + "(",
        left: left -1,
        right
      })
    } else  if (left < right) { // 左右都能加，
      // 但是左得有才行
      if (left > 0) {
        // 增加一个左括号
        queue.push({
          str: str + "(",
          left: left -1,
          right
        })
      }
      // 增加一个右括号
      queue.push({
        str: str + ')',
        left,
        right: right - 1,
      })
    }
  }

  return res;

};
// @lc code=end

