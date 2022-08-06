// here we shall write a function that
// takes in an array as an argument
// and returns an array containing only odd numbers
// this example is a pure recursion example
// we are not using any helper methods here

const returnOddVals = (arr) => {
    let res = []

    if (arr.length === 0) return res

    if (arr[0] % 2 !== 0) {
        res.push(arr[0])
    }

    // here is where we use recursion
    res = [...res, ...returnOddVals([...arr.slice(1)])]

    return res
}

console.log(returnOddVals([4,8,10,13, 21,15,16]))
