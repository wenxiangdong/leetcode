/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const LAND = 1;
  const SEA = 0;
  let maxArea = 0;

  /** 从当前格子开始，标记格子 */
  const travelGrid = ({ x, y }) => {
    const dirs = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ];
    let queue = [{ x, y }];
    let area = 0;
    while (queue.length) {
      const { x, y } = queue.pop();
      // console.log(queue, x, y);
      // 访问到的时候可能已经不是 LAND 了
      grid[x][y] === LAND && area++;
      // 置为0
      grid[x][y] = SEA;
      queue.push(
        ...dirs
          .map(([dX, dY]) => ({ x: x + dX, y: y + dY }))
          .filter(({ x, y }) => grid[x]?.[y] === LAND)
      );
    }
    console.log(area);
    maxArea = Math.max(maxArea, area);
  };

  /** 遍历每个格子 */
  const X = grid.length;
  const Y = grid[0].length;
  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (grid[x][y] === LAND) {
        travelGrid({ x, y });
      }
    }
  }

  return maxArea;
};
// @lc code=end

// const grid = Array(50)
//   .fill([])
//   .map(() => Array(50).fill(1));
// console.log(maxAreaOfIsland(grid));
