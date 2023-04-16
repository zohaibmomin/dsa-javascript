function getDigit(num, k) {
    //extracts the digit from the num
    //2345/10=234.5=234
    return Math.floor(Math.abs(num) / Math.pow(10, k)) % 10

}

function getCount(num) {
    //returns the count of the digits in the num
    if (num === 0) return 1;
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

function mostDigits(arr) {
    //returns the number with the most digits
    var max = 0;
    var no = 0;
    arr.forEach(num => {
        let digitCount = getCount(num);
        if (digitCount > max) {
            max = digitCount;
            no = num;
        }
    });
    return no;
}

function radixSort(list) {
    let largestNum = mostDigits(list);//get the highest count
    let largestNumLength = getCount(largestNum);
    //outer iterate till the largest number length
    for (var i = 0; i < largestNumLength; i++) {
        //create digitBuckets
        let digitBuckets = Array.from({ length: 10 }, () => [])

        for (let index = 0; index < list.length; index++) {
            let element = list[index];
            let dig = getDigit(element, i);
            digitBuckets[dig].push(element);
        }
        list = [].concat(...digitBuckets);
    }
    console.log(list);
    return list;
}