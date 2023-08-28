/**
 * cartesian product of two sets
 * a and b
 */

const cartesianProduct = (arr1, arr2) => {
    let result =[];
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}

let arr1 = [2,3];
let arr2 = [4,5];
console.log(cartesianProduct(arr1, arr2));