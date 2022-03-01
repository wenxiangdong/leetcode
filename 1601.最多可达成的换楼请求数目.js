/*
 * @lc app=leetcode.cn id=1601 lang=javascript
 *
 * [1601] 最多可达成的换楼请求数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const results = [];
  let max = 0;
  /**
   * @param {number} index 到达第几个请求
   * @param {number} count 已经取了多少条请求来构建
   */
  const dfs = (index, count) => {
    if (index === requests.length) {  // 停止迭代条件，到达数组边
      // console.log(results);
      if (results.every((n) => !n)) { // 是符合要求的，即每个楼都是净0
        max = Math.max(max, count);
      }
      return;
    }

    // 不选 requests[index]
    dfs(index + 1, count);

    // 要选
    const [from, to] = requests[index];
    const [originFrom, originTo] = [results[from], results[to]];
    results[from] = (results[from] ?? 0) - 1;
    results[to] = (results[to] ?? 0) + 1;
    dfs(index + 1, count + 1);
    results[from]++;
    results[to]--;
  };

  dfs(0, 0);
  return max;
};
// @lc code=end

// // 输入：
// let n = 5;
// let requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]
// console.log(maximumRequests(n, requests));

