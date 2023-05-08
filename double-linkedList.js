class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    pop() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.tail.prev = null;
            this.length--;
            return this;
        }

    }
    //removes node from start
    shift() {
        if (!this.head) {
            //if list is empty
            return undefined;
        } else {
            let oldHead = this.head;
            if (this.length === 1) {
                this.tail = null;
                this.head = null;
            }else{
                this.head = oldHead.next;
                this.head.prev = null;
                oldHead.next = null;
            }
            
            this.length--;
            return this.oldHead;
        }
    }
}