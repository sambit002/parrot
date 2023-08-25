/**
 * bubble sort is not efficient
 * best avoided in real scenarios
 */

const swap = (first, second) => {
    let temp = first;
    first = second;
    second = temp;
}

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr[i], arr[i+1]);
                swapped = true;
            }
        }
    } while(swapped);
}