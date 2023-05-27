function hash(input, arraySize) {
    let total = 0
    for (let char of input) {
        // map a -> 1, b -> 2, c -> 3
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arraySize;
    }
    return total;
}

// Problems with above solution
// not constant time - grows linear with each character of input size
// not uniformly distributed


/* 
Constant time - better with Min (length or 100)
Uniform - Prime no helps
 */

function hashOptimised(input, arraySize) {
    let total = 0
    let inputSize = Math.min(input.length, 100);
    const WEIRD_PRIME = 31;
    for (let i = 0; i < inputSize; i++) {
        let char = inputSize[i];
        // map a -> 1, b -> 2, c -> 3
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arraySize;
    }
    return total;
}