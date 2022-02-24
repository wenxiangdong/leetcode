/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) {
    return intervals;
  }
  // 按起点升序
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let last = Array.from(intervals[0]);
  const res = [last];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    // 重叠？
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]); // 合并
    } else {
      // 推入新区间
      last = Array.from(current);
      res.push(last);
    }
  }
  return res;
};
// @lc code=end
