/**
 * recursive solution for binary search
 */

const binarySearchRecursive = (arr, n, left, right) => {
    if (!arr.length) return -1;
    if (left > right) return -1;
    let middle = Math.floor((left + right) / 2);
    if (n === arr[middle]) return middle;
    if (n < arr[middle]) {
        return binarySearchRecursive(arr, n, left, middle - 1);
    } else {
        return binarySearchRecursive(arr, n, middle + 1, right);
    } 
}

console.log(binarySearchRecursive([1,2,3,4,5], 5, 0, 4))