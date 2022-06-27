/*
 * @lc app=leetcode.cn id=564 lang=javascript
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  const len = n.length;
  const isPalindromic = (s) => {
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  // 特殊处理0
  if (n === "0") {
    return "1";
  }
  // 特殊处理1位数字
  if (len === 1) {
    return (+n - 1).toString();
  }
  const nBits = n.split("");
  // 特殊处理 最大 最小
  if (nBits.every((bit) => bit === "1")) {
    return Array(nBits.length - 1)
      .fill("9")
      .join("");
  } else if (nBits.every((bit) => bit === "9")) {
    return Array(nBits.length + 1)
      .fill("0")
      .map((v, index, arr) =>
        index === 0 || index === arr.length - 1 ? "1" : v
      )
      .join("");
  }
  if (isPalindromic(n)) {
    const middle = Math.floor((len - 1) / 2);
    const leftLen = middle + 1;
    let leftNum = +n.slice(0, leftLen);
    leftNum--;
    const leftString = leftNum.toString();
    // 结果长度，可能会进位
    const resLen = len + (leftString.length - leftLen);
    const res = Array(resLen).fill("");
    for (let i = 0; i < leftString.length; i++) {
      res[i] = res[resLen - 1 - i] = leftString[i];
    }
    return res.join("");
  } else {
  }
};
// @lc code=end
// 991 999 989
// 191 19 20 202
// 999 99 100 1001
// 9999 99 100 10001
// 99991
let n = "99099";
console.log(nearestPalindromic(n));
