const array = [1, 4, 6, 7, 2, 4, 1]

const arithmeticAverage = (arr) => {
    const sum = arr.reduce((reduced, element) => reduced + element, 0)
    return result = sum / arr.length
}

console.log(arithmeticAverage(array))

const median = arr => {
    let median = 0
    let = numsLength = arr.length;
    numbers.sort((a, b) => a - b)

    if (
        numsLength % 2 === 0
    ) {
        median = (arr[numsLength / 2 - 1] + arr[numsLength / 2]) / 2;
    } else {
        median = arr[(numsLength - 1) / 2];
    }

    return median;
}

console.log(arithmeticAverage(array))

const minNumber = arr => Math.min(...arr)

console.log(minNumber(array))

const minNumber2 = arr => arr.reduce((reduced, element) => reduced < element ? reduced : element)

console.log(minNumber2(array))