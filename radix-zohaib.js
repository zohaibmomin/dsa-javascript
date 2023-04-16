/**
 * 
 * Radix Sort Implementation
 * Helper methods - getDigits, getCount, mostDigits
 * Sorting method - radixSort
 */

//extracts the digit from the num
function getDigit(num, k) {
    //2345/10=234.5=234
    return Math.floor(Math.abs(num) / Math.pow(10, k)) % 10

}

//returns the count of the digits in the num
function getCount(num) {
    if (num === 0) return 1;
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

//returns the number with the most digits
function mostDigits(arr) {
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
        //create digitBuckets for each place from 0 to 10
        let digitBuckets = Array.from({ length: 10 }, () => [])
        //iterate over list 
        for (let index = 0; index < list.length; index++) {
            let element = list[index];
            //get the digit for that units,tens,thousands (largestNum places)
            let dig = getDigit(element, i);
            digitBuckets[dig].push(element);
        }
        // merge all the bucket values into a fresh array
        list = [].concat(...digitBuckets);
    }
    console.log(list);
    return list;
}