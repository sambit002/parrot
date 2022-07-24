//here we shall use binary search to find out
// the number of occurences of an element in a sorted array
// find the num
// find left boundary
//find the right boundary
//here we shall be using two functions
// one to check if an element exits, other to find the frequency
// fun fact: we use binary search in operation system/file systems
// copying and deleting folders files uses recursive algorithms
const search = (arr, val, l, r) => {
    while (l <= r) {
        let middle = Math.floor((l + r) / 2)
        let m = arr[middle]
        if (val > m) {
            l = middle + 1
        }
        else if (val < m) {
            r = middle - 1
        }
        else return middle
    }
    return -1 // if we are not able to find the element
}

const frequencyCounter = (arr, val) => {
    let l = 0
    let r = arr.length - 1
    let pos = search(arr, val, l, r)
    if (pos === -1) return 0
    // if the element is present
    let count = 1 // since the element is there, we start the count with 1
    let left = pos - 1
    while (left >= 0 && arr[left] === val) {
        left--
        count++
    }
    let right = pos + 1
    while (right <= r && arr[right] === val) {
        right++
        count++
    }
    return count
}

console.log(frequencyCounter([1,2,2,2,2,3,4],7))