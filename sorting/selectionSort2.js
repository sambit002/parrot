// this is the implementation
// where we use two for loops
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                let tmp
                tmp = arr[j]
                arr[j] = arr[lowest]
                arr[lowest] = tmp
            }
        }
    }
    return arr
}

console.log(selectionSort([5,1,3,4]))