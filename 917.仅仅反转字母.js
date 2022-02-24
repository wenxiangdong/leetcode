/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function (s) {
  const letter = /[a-zA-Z]/;
  const res = s.split("");
  const reverse = Array.from(res).reverse();
  let i = 0, j = 0;
  while (i < res.length && j < reverse.length) {
      if(!letter.test(res[i])) {
          i++;
      } else if (!letter.test(reverse[j])) {
          j++;
      } else {
          res[i] = reverse[j];
          i++;
          j++;
      }
  }
  return res.join("");
};
// @lc code=end

// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
