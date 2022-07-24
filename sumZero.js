// we shall see here how the elements sum to zero
// we shall be using multiple pointers for this
// [-3, -2, 1, 2, 3, 4 ]
// to solve this using multiple pointers, we need the arr to be sorted :)

const sumZero = (arr) => {
    let start = 0 // the starting pointer
    let end = arr.length - 1
    if (!arr.length) return undefined;
    while (start < end) {
        let sum = arr[start] + arr[end]
        if (sum === 0) {
            return [arr[start], arr[end]]
        }
        else {
            if (sum > 0) {
                end--
            } else {
                start++
            }
        }
    }
}

console.log(sumZero([1,-1]))