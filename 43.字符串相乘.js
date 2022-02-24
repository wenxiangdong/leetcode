/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if ([num1, num2].includes("0")) {
    return "0";
  }
  // 为了计算方便，数组reverse了
  const [num1Array, num2Array] = [num1, num2].map((item) =>
    item.split("").map(Number).reverse()
  );
  /**
   * @param {Number[]} arr1
   * @param {Number[]} arr2
   * @returns {Number[]}
   */
  const addTwoArray = (arr1, arr2) => {
    const [short, long] = [arr1, arr2].sort((a, b) => a.length - b.length);
    let carry = 0;
    const res = Array.from(long).map((bit, index) => {
      const temp = bit + (short[index] ?? 0) + carry;
      carry = Math.floor(temp / 10);
      return temp % 10;
    });
    if (carry) {
      res.push(carry);
    }
    return res;
  };
  // 初始结果
  let res = [0];
  for (let i = 0; i < num1Array.length; i++) {
    // 竖式计算时的一行
    let row = Array(i).fill(0);
    // 进位
    let carry = 0;
    for (let j = 0; j < num2Array.length; j++) {
      // 乘法得到的结果
      const tempResult = num1Array[i] * num2Array[j] + carry;
      carry = Math.floor(tempResult / 10);
      row[i + j] = tempResult % 10;
    }
    if (carry) {
      row.push(carry);
    }
    res = addTwoArray(res, row);
  }
  return res.reverse().join("");
};
// @lc code=end
// console.log(multiply("1234567890123456789012345678901234567890123456789", "1234567890123456789"));