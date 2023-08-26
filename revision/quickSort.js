/**
 * quick sort
 */

const quickSort = (arr) => {
    //base case
    // checking for array with single element
    if (arr.length < 2) {
        return arr;
    }
    // taking last element as pivot
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1,5,7,9,12,0]));