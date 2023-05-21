class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
/* Its basically a MinBinaryHeap */
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        var element = new Node(val, priority);
        this.values.push(element);
        this.bubbleUp(element);
    }

    bubbleUp(element) {
        let index = this.values.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            //swap parent with element
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        ////Process to Remove the root(min)
        //swap first and last one(newly added node in the heap)
        const min = this.values[0];
        const end = this.values.pop();//pop will remove the last element and adjust the position also.
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;

    }

    sinkDown() {
        //Process to Remove the root(min)
        //And then Find the correct position for this swapped node
        //for this sink down with the largestChild

        //First start with root node
        let index = 0;
        const element = this.values[0];

        const length = this.values.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                //swap leftChild if bigger than root
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                //swap rightChild if bigger than root and also bigger than leftChild
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }

            }

            if (swap === null) break;
            //means swap has happened either with left or right child
            //swap the new index ( started with index=0) with the swap index
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

    }
}

var ER = new PriorityQueue();
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)


