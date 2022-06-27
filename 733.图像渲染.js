/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const toKey = (x, y) => `${x}-${y}`;
  const visited = {};
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const originColor = image[sr][sc];
  const queue = [[sr, sc]];
  while (queue.length) {
    const [x, y] = queue.pop();
    console.log(x, y);
    // 涂色
    image[x][y] = color;
    // 记录访问
    visited[toKey(x, y)] = true;
    // 相邻符合的，入队
    queue.push(
      ...dirs
        .map(([deltaX, deltaY]) => [x + deltaX, y + deltaY])
        .filter(
          ([x, y]) => !visited[toKey(x, y)] && image[x]?.[y] === originColor
        )
    );
  }
  return image;
};
// @lc code=end
