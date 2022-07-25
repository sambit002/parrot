// here I shall try out the selection sort today.
// let us see how that goes
const selectionSort = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        for (let i = start; i < arr.length; i++) {
            if (arr[i] < arr[start]) {
                let tmp;
                tmp = arr[i]; 
                arr[i] = arr[start];
                arr[start] = tmp;
            }
        }
        start++;
    }
    return arr;
}
console.log(selectionSort([4,5,3,1,2]));