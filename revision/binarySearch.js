/**
 * revise
 * binary search
 */

const binarySearch = (arr, n) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        //check with middle elem
        if (n === arr[middle]) return middle;
        if (n < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    //if element not found
    return -1;
}