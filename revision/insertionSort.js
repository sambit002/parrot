/**
 * code for insertion sort
 */

const insertionSort = (arr) => {
    // iterate over the unsorted part of the array
    // unsorted part is from second elem till last elem
    // unsorted array always starts from index 1
    for (let i = 1; i < arr.length; i++) {
        //pick unsorted elem to be inserted
        let numToInsert = arr[i];
        // sorted part of the array
        // is to the left of first unsorted elem
        let j = i - 1;
        // check if sorted elem > unsorted elem
        // check till index is >= 0
        while (arr[j] > numToInsert && j >= 0) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = numToInsert;
    }
}

let arr = [5, 6, 1, 0, 3];
insertionSort(arr);
console.log(arr);