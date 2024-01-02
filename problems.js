function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    oddArray = [];
    for (i = 1; i < arr.length; i += 2) {
        oddArray.push(arr[i]);
    }
    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    oddArrayReverse = [];
    for (i = arr.length - 1; i >=0; i--){
        if (i % 2 === 1){
            oddArrayReverse.push(arr[i]);
        }
    }
    return oddArrayReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let powerOfTwo = [];
    for (i = 1; i < arr.length; i *= 2) {
        powerOfTwo.push(arr[i]);
    }
    return powerOfTwo;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let powerOfN = [];
    for (i = 1; i < arr.length; i *= n) {
        powerOfN.push(arr[i]);
    }
    return powerOfN;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let arrayFirstHalf = [];
    for (i = 0; i < (arr.length / 2); i++) {
        arrayFirstHalf.push(arr[i]);
    }
    return arrayFirstHalf;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let arraySecondHalf = [];
    for (i = Math.round(arr.length/2); i < arr.length; i++) {
        arraySecondHalf.push(arr[i]);
    }
    return arraySecondHalf;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
