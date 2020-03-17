class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      var node = new Node(element);
      var current;
      if (this.head == null) this.head = node;
      else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
    printList() {
      var curr = this.head;
      var str = '';
      while (curr) {
        str += curr.element + ' ';
        curr = curr.next;
      }
      console.log(str);
    }
    insertAt(element, index) {
      if (index > 0 && index > this.size) return false;
      else {
        var node = new Node(element);
        var curr, prev;
        curr = this.head;
        if (index == 0) {
          this.head = node;
        } else {
          curr = this.head;
          var it = 0;
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }
          node.next = curr;
          prev.next = node;
        }
        this.size++;
      }
    }
  }
  var ll = new LinkedList();
  
  ll.insertAt(60,0);
  ll.insertAt(70,1);
  ll.printList();