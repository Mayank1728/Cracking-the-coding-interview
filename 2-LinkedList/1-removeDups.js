/*
  Remove Dups! Write code to remove duplicates from an unsorted linked list.
  FOLLOW UP
  How would you solve this problem if a temporary buffer is not allowed?
*/

// My first approach
function removeDup(head) {
  // if head node is empty/null return null
  if (!head) return null;

  // We use 2 pointer and hashmap
  // when curr.val is found in hashmap(this means its duplicate)
  // prev.next = curr.next
  // This way we remove the duplicate node
  let prev = null;
  let curr = head;
  let map = {};
  while (curr) {
    // when u look for value not present in hashmap it returns undefined
    // this means that the value was not previously present in the hashmap
    // so now we put this value in the hashmap
    if (!map[curr.val]) {
      map[curr.val] = 1;
      prev = curr;
      curr = curr.next;
    }
    // this means value was previously present in the hashmap
    // so we need to delete this dup node
    else {
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    }
  }
  // Time: O(N) as we traverse the linkedList
  // Space: O(N) as we used hashmap to store the values
}

//Second approach for CONSTANT SPACE
function removeDuplicates(head) {
  if (!head) return null;
  let fixed = head;
  while (fixed) {
    let prev = fixed;
    let curr = fixed.next;
    while (curr) {
      if (curr.val === fixed.val) {
        prev.next = curr.next;
        curr.next = null;
        curr = prev.next;
      } else {
        curr = curr.next;
        prev = prev.next;
      }
    }
    fixed = fixed.next;
  }
  // Time: O(N^2) as one pointer is fixed and other two are traversing the rest linked list
  // Space: O(1) const space
}
// bottom code was created to test my removeDup function
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.root = null;
  }
}

let numbers = new SinglyLinkedList();
numbers.root = new Node(10);
numbers.root.next = new Node(5);
numbers.root.next.next = new Node(60);
numbers.root.next.next.next = new Node(5);
numbers.root.next.next.next.next = new Node(4);
numbers.root.next.next.next.next.next = new Node(10);
removeDup(numbers.root);
