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
var swapPairs = function(head) {
    // Create a dummy node to serve as the new head
    const dummy = new ListNode(0, head);
    // Initialize current and previous nodes to iterate the list
    let prev = dummy, curr = head;
    while (curr && curr.next) {
        // Swap the adjacent nodes
        const next = curr.next;
        curr.next = next.next;
        next.next = curr;
        prev.next = next;
        // Update previous and current nodes
        prev = curr;
        curr = curr.next;
    }
    // Return the new head
    return dummy.next;
};