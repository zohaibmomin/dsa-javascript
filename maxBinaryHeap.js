class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp(element);
    }

    bubbleUp(element) {
        let index = this.values.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            //swap parent with element
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extractMax() {
        ////Process to Remove the root(max)
        //swap first and last one(newly added node in the heap)
        const max = this.values[0];
        const end = this.values.pop();//pop will remove the last element and adjust the position also.
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;

    }

    sinkDown() {
        //Process to Remove the root(max)
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
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                //swap rightChild if bigger than root and also bigger than leftChild
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);