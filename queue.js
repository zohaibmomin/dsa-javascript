/* Using Arrays 
1. Push and then shift
2. Unshift and then pop */

/* Using own class */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /* Add to the end */
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    /* Remove from the start */
    dequeue() {
        if (this.size === 0) return null;
        var temp = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}