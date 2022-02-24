/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const DIGIT_DICT = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }
  return digits.split("").reduce(
    (combinations, digit) => {
      const letters = DIGIT_DICT[digit];
      return combinations.reduce((accArray, curCom) => {
        return [...accArray, ...letters.map((letter) => curCom + letter)];
      }, []);
    },
    [""]
  );
};
// @lc code=end
