// here I shall try out the selection sort today.
// let us see how that goes

const selectionSort = (arr) => {
    // here we shall be sorting the array
    // the array shall be sorted in an ascending order
    let smallest = arr[0];
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest; 
}

console.log(selectionSort([4,5,3,1,2]))