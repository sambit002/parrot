// this is purely my implementation
// try to use this swapping technique 
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

console.log(swapSort([5,4,3]))