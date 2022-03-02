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
  const nNum = +n;
  if (n === "0") {
    return "1";
  }
  if (len === 1) {
    return (nNum - 1).toString();
  }
  const isPalindromic = () => {
    let i = 0,
      j = len - 1;
    while (i < j) {
      if (n[i] !== n[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  const genByLeftPartDecrease = () => {
    const middle = Math.floor((len - 1) / 2);
    const leftNumLen = middle + 1;
    let leftNum = +n.slice(0, leftNumLen);
    leftNum--;
    const leftNumStr = leftNum.toString();
    if (leftNum === 0 || leftNumStr.length < leftNumLen) {
      return Array(len - 1).fill("9").join('');
    } else {
      const resLen = len;
      const res = Array(resLen).fill("");
      for (let i = 0; i < leftNumStr.length; i++) {
        res[i] = res[resLen - 1 - i] = leftNumStr[i];
      }
      return res.join("");
    }
  };
  const genByLeftPartIncrease = () => {
    const middle = Math.floor((len - 1) / 2);
    const leftNumLen = middle + 1;
    let leftNum = +n.slice(0, leftNumLen);
    leftNum++;
    const leftNumStr = leftNum.toString();
    const resLen = len + (leftNumStr.length - leftNumLen);
    const res = Array(resLen).fill("");
    for (let i = 0; i < leftNumStr.length; i++) {
      res[i] = res[resLen - 1 - i] = leftNumStr[i];
    }
    return res.join("");
  };
  const genByLeftPartCopy = () => {
    const res = n.split("");
    let i = 0,
      j = len - 1;
    while (i < j) {
      res[j] = res[i];
      i++;
      j--;
    }
    return res.join("");
  };

  const sortBy = (a, b) => {
    const deltaA = Math.abs(+a - nNum);
    const deltaB = Math.abs(+b - nNum);
    if (deltaA === deltaB) {
      return +a - +b;
    } else {
      return deltaA - deltaB;
    }
  };

  if (isPalindromic()) {
    // console.log(genByLeftPartDecrease(), genByLeftPartIncrease())
    return [genByLeftPartDecrease(), genByLeftPartIncrease()].sort(sortBy)[0];
  } else {
    return [
      genByLeftPartDecrease(),
      genByLeftPartCopy(),
      genByLeftPartIncrease(),
    ].sort(sortBy)[0];
  }
};
// @lc code=end
// let n = "991";
// console.log(nearestPalindromic(n));
