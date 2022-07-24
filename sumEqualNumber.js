// this is a slight variation of the zero sum
// here we shall check which two elements of the arr add upto
// the given number

const sum = (arr) => {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let sum = arr[start] + arr[end]
        if (sum === 4) {
            return [arr[start], arr[end]]
        } else {
            if (sum < 4) {
                start++
            } else {
                end--
            }
        }
    }
}

console.log(sum([1,2,3,4]))