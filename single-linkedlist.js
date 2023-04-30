class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //adds node to end
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            //if first item , set head and tail to this new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            //if more than 1 item, add this new node
            this.tail.next = newNode
            this.tail = newNode;

        }
        this.length++;
        return this;
    }

    //travers whole list
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
        return current;
    }

    //removes node from end
    pop() {
        if (this.length === 0) {
            //if list is empty
            return undefined;
        } else {
            let current = this.head;
            let newTail = current;
            //Make the current point to head
            //make the newTail (previousNode)
            while (current.next) {
                newTail = current;
                current = current.next;//NewTail always one behind the tail
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                //if last item popped then point head and tail to null
                //means list is now empty after last popped
                this.head = null;
                this.tail = null;
            }
            // console.log("popped element is::", current.val)
            return current;
        }

    }

    //removes node from start
    shift() {
        if (!this.head) {
            //if list is empty
            return undefined;
        } else {
            let currentHead = this.head;
            this.head = currentHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return this.currentHead;
        }
    }

    //adds node to start
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            //if list was empty
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            //if list is not empty
            //link newNode next to currentHead
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    //get a node for a given index position
    get(indexPos) {
        //if indexPos is outside range
        if (indexPos < 0 || indexPos > this.length) {
            return null
        }
        let current = this.head;
        let counter = 0
        //traverse till indexPos
        while (counter !== indexPos) {
            current = current.next;
            counter++;
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

    //insert a node at given indexPos
    insert(indexPos, val) {
        //scenarios
        if (indexPos < 0 || indexPos > this.length) return !!null;
        if (indexPos === this.length) return !!this.push(val);
        if (indexPos === 0) return !!this.unshift(val);

        //if value is in middle 0 < x < x.length
        let newNode = new Node(val);
        let previousNode = this.get(indexPos - 1);
        //point prevNode next to newNode but before that take in tempVar
        let tempVar = previousNode.next;
        previousNode.next = newNode;
        newNode.next = tempVar;
        this.length++;
        return true;
    }
    remove(indexPos) {
        //scenarios
        if (indexPos < 0 || indexPos >= this.length) return null;
        if (indexPos === this.length - 1) return this.pop();
        if (indexPos === 0) return this.shift();

        //if value is in the middle to be removed
        let previousNode = this.get(indexPos - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    //Reverse a singlee linked list
    reverse() {
        //100->200->300
        //T P     C    N H
        //N->C.next...300->200
        //C.next -> P..
        //P->C P->200, 
        //C->N C->300

        //Swap the head and tail
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        //you'll need three pointers , currentNode, prevNode, nextNode
        let previousNode = null;
        let nextNode = null;

        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;//move nextNode as currentNode's next
            currentNode.next = previousNode;//make next node as previous node
            previousNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }
}



//Sample test data
var list = new SingleLinkedList();
list.push("Item1");
list.push("Item2");
list.push("Item3");