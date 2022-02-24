/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 寻找第一个大于等于target的下标
  const binarySearch = (target) => {
    let left = 0,
      right = nums.length;
    // 向左压缩
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (target <= nums[mid]) {  // 第一个应该在 [left, mid] 中
        right = mid;
      } else {  // 第一个应该在 [mid + 1, right] 中
        left = mid + 1;
      }
    }
    return left;
  };
  const first = binarySearch(target);
  const last = binarySearch(target + 1);
  return nums[first] === target ? [first, last - 1] : [-1, -1];
};
// @lc code=end
