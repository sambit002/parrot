// here I shall implement the basic binary search algorithms
// we will take a sorted array and return the position of a number
// so let us begin
const search = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)
    while (start <= end) {
        let midelem = arr[mid]
        if (midelem > val) {
            end = mid - 1
        }
        else if (midelem < val) {
            start = mid + 1
        }
        else return mid
    }
}

console.log(search([1,2,3,4,5],4))