// here we shall find out the sum of a range of numbers
// the base case: when the arg is equal to 1; return 1
// so let us begin

const numRange = (num) => {
    if (num === 1) return 1
    return num + numRange(num - 1)
}

console.log(numRange(20))
