const array = [1, 4, 6, 7, 2, 4, 1]

const arithmeticAverage = (arr) => {
    const sum = arr.reduce((reduced, element) => reduced + element, 0)
    return result = sum / arr.length
}

console.log(arithmeticAverage(array))

function median(array) {
    let median = 0
    let = numsLength = array.length;
    numbers.sort((a, b) => a - b)

    if (
        numsLength % 2 === 0
    ) {
        median = (array[numsLength / 2 - 1] + array[numsLength / 2]) / 2;
    } else {
        median = array[(numsLength - 1) / 2];
    }

    return median;
}
