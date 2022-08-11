// this is purely my implementation
// try to use this swapping technique
const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
} 
const swapSort = (arr) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        for (let i =0; i <= end; i++) {
            let temp;
            if (arr[i] > arr[i+1]) {
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
        end--
    } 
    return arr; 
}

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}

console.log(bubbleSort([4,1,2,5,10]))
// console.log(swapSort([5,4,3]))