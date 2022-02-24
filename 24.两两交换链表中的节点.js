/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const emptyHeader = new ListNode(-1, head);
  /**
   * 交换该结点后的两个结点
   * @param {ListNode} node
   */
  function swapTwoAfter(node) {
    const first = node.next;
    if (!first) {
      return;
    }
    const second = first.next;
    if (!second) {
      return;
    }
    node.next = second;
    first.next = second.next;
    second.next = first;
  }

  let p = emptyHeader;
  while(p) {
    swapTwoAfter(p);
    p = p.next?.next;
  }
  return emptyHeader.next;
};
// @lc code=end
