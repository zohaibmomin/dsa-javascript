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
            } else {
                this.head = oldHead.next;
                this.head.prev = null;
                oldHead.next = null;
            }

            this.length--;
            return this.oldHead;
        }

    }
    //adds node to start
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            //if list was empty
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            //if list is not empty
            //link newNode next to currentHead
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    //get a node for a given index position
    get(indexPos) {
        //if indexPos is outside range
        if (indexPos < 0 || indexPos >= this.length) {
            return null
        }
        var current;
        var counter;
        if (indexPos <= this.length / 2) {
            //element to the left
            //start from the first
            current = this.head;
            counter = 0
            //traverse till indexPos
            while (counter !== indexPos) {
                current = current.next;
                counter++;
            }

        } else {
            //element to the right
            //start from the prev
            current = this.tail;
            counter = this.length - 1;
            //traverse till indexPos
            while (counter !== indexPos) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    //set a value for a given node at indexPos
    set(indexPos, val) {
        let foundNode = this.get(indexPos);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    //insert a new node
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val);

        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    //remove a Node //HHH
    //eg A B C HHH D E
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        var removedNode = this.get(index);//HHH
        var beforeNode = removedNode.prev//C
        var afterNode = removedNode.next;//D
        removedNode.next = null, removedNode.prev = null;
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        this.length--;
        return true;
    }
}

