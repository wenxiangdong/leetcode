/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const width = board.length;
  if (width === 0) {
    return board;
  }
  const height = board[0].length;

  const visited = Array(width)
    .fill(0)
    .map(() => Array(height).fill(false));
  const dp = Array(width)
    .fill(0)
    .map(() => Array(height).fill(undefined));

  const dirHelpers = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const travel = (x, y) => {
    if (visited[x][y]) {
      return;
    }
    let ok = true;
    const res = [];
    const queue = [[x, y]];
    while (queue.length) {
      const [x, y] = queue.shift();
      visited[x][y] = true;
      const notEdge = x > 0 && x < width - 1 && y > 0 && y < height - 1;
      if (notEdge) {
        res.push([x, y]);
        dirHelpers.forEach(([deltaX, deltaY]) => {
          const newX = x + deltaX;
          const newY = y + deltaY;
          if (dp[newX][newY] !== undefined) {
            ok = dp[newX][newY];
          } else if (board[newX][newY] === "O" && !visited[newX][newY]) {
            queue.push([newX, newY]);
          }
        });
      } else {
        ok = false;
        dp[x][y] = false;
      }
    }
    if (ok) {
      res.forEach(([x, y]) => {
        board[x][y] = "X"
        dp[x][y] = true;
      });
    } else {
      res.forEach(([x, y]) => (dp[x][y] = false));
    }
  };

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (board[i][j] === "O" && !visited[i][j]) {
        travel(i, j);
      }
    }
  }
};
// @lc code=end