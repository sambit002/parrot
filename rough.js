//let us do unique vals
const uniqueValues = (arr) => {
    let start = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[start] !== arr[i]) {
            start++
            arr[start] = arr[i]
        }
    }
    return start + 1
}

// console.log(uniqueValues([1,2,2,2,2,2,4,4,4,6]))

//let us do another one
// let us do the binary search
// find out position of the given value in an array
const search = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        let mid = arr[middle]
        if (val > mid) {
            start = middle + 1
        } else if (val < mid) {
            end = middle - 1
        }
        else {
            return middle
        }
    }
    return -1
}

// console.log("Search: ",search([1,2], 2))

const arrSum = (arr,val) => {
  let start = 0;
  let end= arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === val) return [arr[start], arr[end]]
    if (sum < val) {
      start++
    } else {
      end--
    }
  }
}

// console.log(arrSum([1,2,3,4], 7))
// 3 2 1
// 
const myInSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let initial = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > initial; j--) {
      arr[j + 1] = arr[j] 
    }
    arr[j + 1] = initial
  }
  return arr
}

const swap = (arr, i, j) => {
  let temp;
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

// [1,2,3,6,10,0] >> input
// [1,0,3,6,10,2]
// [0,1,3,6,10,2]
// we return swapindex = 1
const pivot = (arr, start = 0) => {
  let swapIndex = start
  let pivotElement = arr[start]
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotElement > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap (arr, swapIndex, start)
  // console.log(arr)
  return swapIndex
}
// console.log(pivot([1,2,3,6,10,0]))

const pivot2 = (arr, start = 0) => {
  let swapIndex = start // we always start from index 0
  let pivotElem = arr[start] // pivot is an element
  for (let i = start + 1; i < arr.length; i++) {
    // we check for elements less than the pivot
    if (arr[i] < pivotElem) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  //final step
  // we swap the start index and swap index
  swap(arr, swapIndex, start)
  //we return the swap index
  return swapIndex
}

// let us try to run the quick sort
const quicksort = (arr, start = 0, end = arr.length) => {
  if (start < end) {
    const piv = pivot(arr, start, end)
    quicksort(arr, start, piv - 1)
    quicksort(arr, piv + 1, end)
  }
  return arr
}

// console.log("quick sorted: ",quicksort([5,1,10,2,4]))
// let us recursively try to implement
// substring program

const match = (text, pattern, tindex, pindex) => {
  // we shall check for the end of text and pattern
  if (tindex === text.length && pindex !== pattern.length) return false

  // if we have reached till the end of pattern
  // that means we have found a match
  // so we return true
  if (pindex === pattern.length) return true
  
  if (text[tindex] === pattern[pindex]) {
    return match(text, pattern, tindex + 1, pindex + 1)
  }
  
  return 0
}

const contains = (text, pattern, tindex, pindex) => {
  if (tindex === text.length) return false
  
  if (text[tindex] === pattern[pindex]) {
    if (match(text, pattern, tindex, pindex)) {
      return true
    } else {
      return contains(text, pattern, tindex + 1, pindex)
    }
  }
  
  return contains(text, pattern, tindex + 1, pindex)
}

console.log(contains("Sambit", "Sam", 0, 0))


