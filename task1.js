const array = [1, 4, 6, 7, 2, 4, 1]

const arithmeticAverage = (arr) => {
    const sum = arr.reduce((reduced, element) => reduced + element, 0)
    return result = sum / arr.length
}

console.log(arithmeticAverage(array))