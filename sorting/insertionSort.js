//I have missed out on insertion sort problem, so lets do it now
//[2,1] => 
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j+1] = arr[j]
        }
        arr[j + 1] = temp
    }
    return arr;
}

console.log(insertionSort([2,5,4,3,10,1,6]))