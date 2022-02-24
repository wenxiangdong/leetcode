/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 即从 0 到 nums.len - 1
//  * bfs 会超时
//  */
// var jump = function (nums) {
//   const queue = [];
//   const des = nums.length - 1;
//   let minStep = nums.length;
//   queue.push({
//     index: 0,
//     step: 0,
//   });
//   while (queue.length) {
//     const item = queue.shift();
//     if (item.index === des) {
//       minStep = Math.min(minStep, item.step);
//     } else if (item.index < des) {
//       const num = nums[item.index]; // 这个位置可以走多少步
//       for (let i = 1; i <= num; i++) {
//         queue.push({
//           index: item.index + i,
//           step: item.step + 1,
//         });
//       }
//     }
//   }
//   return minStep;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const length = nums.length;
  const allIndexes = Array(length)
    .fill(0)
    .map((_, index) => index);
  /**
   * 需要一个map
   * 当前位置 -> 前一个可能的位置
   */
  const currentToNextMap = nums.reduce((map, step, index) => {
    map[index] = allIndexes.slice(index + 1, index + step + 1);
    return map;
  }, {});
  const currentToLastMap = Object.entries(currentToNextMap).reduce(
    (map, [lastIndex, currentIndexes]) => {
      currentIndexes.forEach((curIdx) => {
        if (!map[curIdx]) {
          map[curIdx] = [];
        }
        map[curIdx].push(+lastIndex);
      });
      return map;
    },
    {}
  );
  /**
   * 开始dp
   */
  const dp = [0];
  for (let i = 1; i < length; i++) {
    const possibleIndexes = currentToLastMap[i];
    dp[i] = Math.min(...possibleIndexes.map((index) => dp[index] + 1));
  }
  return dp[length - 1];
};
// @lc code=end

// const input = [
//   6, 2, 6, 1, 7, 9, 3, 5, 3, 7, 2, 8, 9, 4, 7, 7, 2, 2, 8, 4, 6, 6, 1, 3,
// ];
// console.log(jump(input));
