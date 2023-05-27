function hash(input, arraySize) {
    let total = 0
    for (let char of input) {
        // map a -> 1, b -> 2, c -> 3
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arraySize;
    }
    return total;
}