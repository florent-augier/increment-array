/**
 * Increment Array like number
 * @param arrayOfNumbers - first parameter: should be an Array
 * @returns the incremented Array: should be an Array
 */
function increment(arrayOfNumbers) {
    var i = arrayOfNumbers.length;
    while (i--) {
        if (arrayOfNumbers[i] !== 9) {
            arrayOfNumbers[i] += 1;
            break;
        }
        else if (arrayOfNumbers[i] === 9 && i !== 0) {
            arrayOfNumbers[i] = 0;
        }
        else if (arrayOfNumbers[i] === 9 && i === 0) {
            arrayOfNumbers[i] = 0;
            arrayOfNumbers.unshift(1);
        }
    }
    return arrayOfNumbers;
}
console.log(increment([1, 2, 3])); // returns [1,2,4]
console.log(increment([9, 9])); // returns [1,0,0]
console.log(increment([9, 0, 9])); // returns [9,1,0]
