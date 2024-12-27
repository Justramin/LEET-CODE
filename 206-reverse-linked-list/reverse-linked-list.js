/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let previous = null;
    let curr = head;
    while(curr!==null){
        let nextTemp = curr.next;
        curr.next = previous;
        previous = curr;
        curr = nextTemp;
    }
    return previous;
};
