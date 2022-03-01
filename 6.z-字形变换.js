/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

/*
 * A   E
 * B D F
 * C   G
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const ROW_UP = -1,
    ROW_DOWN = 1,
    ROW_STILL = 0;
  const grid = Array(numRows)
    .fill(0)
    .map(() => []);
  let row = 0,
    col = 0,
    sIndex = 0,
    /** 代表行是向下（1）还是向上（-1），还是不变（0） */
    dir = ROW_STILL;
  while (sIndex < s.length) {
    grid[row][col] = s[sIndex];
    // 字符向前
    sIndex++;

    /** Z字判断 */
    if (row === 0 && row === numRows - 1) {
      dir = ROW_STILL;
    } else if (row === 0) {
      // 触顶，则向下走
      dir = ROW_DOWN;
    } else if (row === numRows - 1) {
      // 触底，则向上走
      dir = ROW_UP;
    }
    if (dir === ROW_DOWN) {
      row++;
    } else if (dir === ROW_UP) {
      row--;
      col++;
    } else if (dir === ROW_STILL) {
      col++;
    }
  }
  return grid.map((row) => row.filter(Boolean).join("")).join("");
};
// @lc code=end

// let s = "PAYPALISHIRING",
//   numRows = 3;

// s = "PAYPALISHIRING";
// numRows = 4;
// s = "A";
// numRows = 1;
// s = "AB";
// numRows = 1;
// console.log(convert(s, numRows));
