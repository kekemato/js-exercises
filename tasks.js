const array = [1, 4, 6, 7, 2, 4, 1]

const arithmeticAverage = (arr) => {
    const sum = arr.reduce((reduced, element) => reduced + element, 0)
    return result = sum / arr.length
}

console.log(arithmeticAverage(array))

// -----------------------------

const median = arr => {
    let median = 0
    let = numsLength = arr.length;
    arr.sort((a, b) => a - b)

        return numsLength % 2 === 0 ?
        ((arr[numsLength / 2 - 1] + arr[numsLength / 2]) / 2)
        : (arr[(numsLength - 1) / 2])
}

console.log(median(array))

// -----------------------------

const minNumber = arr => Math.min(...arr)

console.log(minNumber(array))

// -----------------------------

const minNumber2 = arr => arr.reduce((reduced, element) => reduced < element ? reduced : element)

console.log(minNumber2(array))

// -----------------------------

const maxNumber = arr => Math.max(...arr)

console.log(maxNumber(array))

// -----------------------------

// const arithmeticAverageWithoutArray = () => {
//     const sum = 0
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return result = sum / arguments.length
// }

const arithmeticAverageWithoutArray = (...arr) => {
    const sum = arr.reduce((reduced, element) => reduced + element, 0)
    return result = sum / arr.length
}

console.log(arithmeticAverageWithoutArray(1, 2, 3, 5, 7))

// -----------------------------

const medianWithoutArray = (...arr) => {
    let median = 0
    let = numsLength = arr.length;
    arr.sort((a, b) => a - b)

    if (
        numsLength % 2 === 0
    ) {
        median = (arr[numsLength / 2 - 1] + arr[numsLength / 2]) / 2;
    } else {
        median = arr[(numsLength - 1) / 2];
    }

    return median;
}

console.log(medianWithoutArray(1, 3, 5, 7, 8))

// -----------------------------

const minNumberWithoutArray = (...arr) => Math.min(...arr)

console.log(minNumberWithoutArray(2, 3, 5, 7, 8))

// -----------------------------

const maxNumberWithoutArray = (...arr) => Math.max(...arr)

console.log(maxNumberWithoutArray(1, 3, 5, 7, 8))