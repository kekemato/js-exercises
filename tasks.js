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

const maxNumber = arr => Math.max(...arr)

console.log(maxNumber(array))

// -----------------------------

function arithmeticAverageWithoutArrayArg() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return result = sum / arguments.length
}

console.log(arithmeticAverageWithoutArrayArg(1, 2, 3, 5, 7))

// -----------------------------

const getStats = arr => ({
    average: arithmeticAverage(arr),
    median: median(arr),
    max: minNumber(arr),
    min: maxNumber(arr)
})

// -----------------------------

const getValueFromInput = input => (
    arr = input.value.split(',')
    .map(number => Number(number))
    .filter(number => number || number === 0)
)

const buttonClickHandler = () => {
    console.log(
        getValueFromInput(document.querySelector('.input'))
    )
}

document.querySelector('button').addEventListener(
    'click',
    buttonClickHandler
)

