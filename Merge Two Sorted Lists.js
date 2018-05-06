/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    /*var p1 = l1;
    var p2 = l2;
    var p1Head = new ListNode(0);
    var p2Head = new ListNode(0);
    p1Head.next = l1;
    p2Head.next = l2;
    p1Pre = p1Head;
    if(!p1) {
        return p2;
    } else if(!p2) {
        return p1;
    }
    while(p2) {
        if(p2.val <= p1.val) {
            p2Head.next = p2.next;
            p2.next = p1;
            p1Pre.next = p2;
            p1Pre = p2;
            p2 = p2Head.next;
        } else {
            if(!p1.next) {
                p1.next = p2Head.next;
                return p1Head.next;
            } else {
                p1Pre = p1;
                p1 = p1.next;   
            }
        }
    }
    return p1Head.next;*/
    if(!l1) {
        return l2;
    } else if(!l2) {
        return l1
    }
    var cur1 = l1;
    var cur2 = l2;
    var pre1 = new ListNode(0);         //the previous node of cur node of the l1
    var pre2 = new ListNode(0);         //the head node of l2 
    pre1.next = cur1;
    pre2.next = cur2;
    var head1 = pre1;   //the head node of l1. (right, both pointers head1 and pre1 point at head node)
    /*
    * var head1 = new ListNode(0);      //wrong, this is to create a new head node, when there is a node inserted between pre1 and cur1, head 1 is still point at the cur1 
    * pre1.next = cur1;
    * pre2.next = cur2;
    * head1.next = l1;
    */
    while(cur2) {   //the condition is cur2 is exsitent
        if(cur1.val <= cur2.val) {  //if cur1 <= cur2, no insertion, continue checking the next cur2
            if(!cur1.next) {    //if cur1 is null, that means the remaining l2 nodes are all bigger than cur1 nodes
                cur1.next = pre2.next;
                return head1.next;
            }
            pre1 = cur1;
            cur1 = cur1.next
        } else {
            pre2.next = cur2.next;  //l2 head node points at the cur second node of l2
            cur2.next = cur1    
            pre1.next = cur2;
            pre1 = cur2;
            cur2 = pre2.next;   //cur node of l2 is the next node of head node
        }
    }
    return head1.next;
};