// here i shall be writing the pivot function
// so let us start
// [4,1,2,6] p = 4
const swap = (arr, i, j) => {
    let temp
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//the pivot function aims to return a pivot index

const pivot = (arr, start=0, end = arr.length + 1) => {
    let pivot = arr[start]
    let sid = start // this is the swap id
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            sid++
            swap(arr, sid, i)
        }
    }
    swap(arr, start, sid)
    console.log(arr)
    return sid;
}

console.log(pivot([4,5,1,3,9,10]))