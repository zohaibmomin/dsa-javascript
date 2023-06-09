class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hashOptimised(input) {
        let total = 0
        let inputSize = Math.min(input.length, 100);
        const WEIRD_PRIME = 31;
        for (let i = 0; i < inputSize; i++) {
            let char = input[i];
            // map a -> 1, b -> 2, c -> 3
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hashOptimised(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // NOTE multiple set on same key will push both values
        // It will not over-ride like how other languages SET works
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hashOptimised(key);
        let value;
        if (!this.keyMap[index]) {
            value = this.keyMap[index];
        } else {
            //hash collision
            let valArr = this.keyMap[index];
            valArr.forEach(element => {
                if (element[0] === key) {
                    value = element[1];
                }
            });
        }
        return value
    }

    values() {
        let valueArr = [];
        this.keyMap.forEach(element => {
            if (element) {
                element.forEach(ele => {
                    if (!valueArr.includes(ele[1])) {
                        valueArr.push(ele[1]);
                    }
                });
            }
        });
        return valueArr;
    }

    keys() {
        let valueArr = [];
        this.keyMap.forEach(element => {
            if (element) {
                element.forEach(ele => {
                    if (!valueArr.includes(ele[0])) {
                        valueArr.push(ele[0]);
                    }
                });
            }
        });
        return valueArr;
    }
}

ht = new HashTable(4);
ht.set("zohaib", "momin");
ht.set("zb", "shortmomin");
ht.set("neha", "momin");
ht.set("nazia", "momin");



