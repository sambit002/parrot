// now we shall be implementing the merge sort algorithm
// for this we shall be using the merge array which we used previously

//get the code of the merge array:
const mergeArray = (a, b) => {
    let res = []; //this shall be array merged from 2arrs
    let first = 0; //pointer for arr a
    let second = 0; //pointer for arr b
    while (first < a.length && second < b.length) {
        if (a[first] < b[second]) {
            res.push(a[first])
            first++
        } else {
            res.push(b[second])
            second++
        }
    }
    while (first < a.length) {
        res.push(a[first]) 
        first++
    }
    while (second < b.length) {
        res.push(b[second])
        second++
    }
    return res;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    } 
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeArray(left, right)
}

console.log(mergeSort([1,30, 4,20,10,15]))