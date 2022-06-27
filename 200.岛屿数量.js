/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */
// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const LAND = "1";
  const SEA = "0";
  let res = 0;

  /** 从当前格子开始，标记格子 */
  const travelGrid = ({ x, y }) => {
    const dirs = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ];
    let queue = [{ x, y }];
    while (queue.length) {
      const { x, y } = queue.pop();
      // 置为0
      grid[x][y] = SEA;
      queue.push(
        ...dirs
          .map(([dX, dY]) => ({ x: x + dX, y: y + dY }))
          .filter(({ x, y }) => grid[x]?.[y] === LAND)
      );
    }
  };

  /** 遍历每个格子 */
  const X = grid.length;
  const Y = grid[0].length;
  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (grid[x][y] === LAND) {
        res++;
        travelGrid({ x, y });
      }
    }
  }

  return res;
};
// @lc code=end
