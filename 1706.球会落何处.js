/*
 * @lc app=leetcode.cn id=1706 lang=javascript
 *
 * [1706] 球会落何处
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 * 将球导向右侧的挡板跨过左上角和右下角，在网格中用 1 表示。
 * 将球导向左侧的挡板跨过右上角和左下角，在网格中用 -1 表示。
 */
var findBall = function (grid) {
  const balls = Array(grid[0].length)
    .fill(-1)
    .map((_, index) => index);
  for (let row of grid) {
    for (let i = 0; i < balls.length; i++) {
      const ballCurrentIndex = balls[i];
      if (ballCurrentIndex === -1) {
        continue;
      } else {
        const cell = row[ballCurrentIndex];
        const ballNextIndex = ballCurrentIndex + cell;
        balls[i] = row[ballNextIndex] === cell ? ballNextIndex : -1;
      }
    }
  }
  return balls;
};
// @lc code=end

// let grid = [
//   [1, 1, 1, -1, -1],
//   [1, 1, 1, -1, -1],
//   [-1, -1, -1, 1, 1],
//   [1, 1, 1, 1, -1],
//   [-1, -1, -1, -1, -1],
// ];
// // 输出：[1,-1,-1,-1,-1]
// grid = [[-1]]
// // [-1]
// grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
// // [0,1,2,3,4,-1]
// grid = [
//   [
//     1, -1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1,
//     -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, -1, -1, -1, 1,
//   ],
//   [
//     -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1,
//     1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, 1, -1, 1, 1,
//   ],
//   [
//     1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1,
//     1, -1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1,
//   ],
// ];
// console.log(findBall(grid));
