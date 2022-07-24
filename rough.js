//let us do unique vals
const uniqueValues = (arr) => {
    let start = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[start] !== arr[i]) {
            start++
            arr[start] = arr[i]
        }
    }
    return start + 1
}

console.log(uniqueValues([1,2,2,2,2,2,4,4,4,6]))

//let us do another one
// let us do the binary search
// find out position of the given value in an array
const search = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        let mid = arr[middle]
        if (val > mid) {
            start = middle + 1
        } else if (val < mid) {
            end = middle - 1
        }
        else {
            return middle
        }
    }
    return -1
}

console.log("Search: ",search([1,2], 2))

const arrSum = (arr,val) => {
  let start = 0;
  let end= arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === val) return [arr[start], arr[end]]
    if (sum < val) {
      start++
    } else {
      end--
    }
  }
}

console.log(arrSum([1,2,3,4], 7))
