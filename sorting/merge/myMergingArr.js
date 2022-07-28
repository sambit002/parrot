// here I shall write a function to merge two sorted arrays

const mergeTwo = (a, b) => {
    let first = 0;
    let second = 0;
    let res = [];
    while (res.length !== (a.length + b.length)) {
        let comp1 = a[first];
        let comp2 = b[second];
        if (!comp1) {
            for (let i = second; i < b.length; i++) {
                res.push(b[i])
            }
            break;
        }
        if (!comp2) {
            for (let i = first; i < a.length; i++) {
                res.push(a[i])
            }
            break;
        }    
        if (comp1 < comp2) {
            res.push(comp1)
            first++
        } else {
            res.push(comp2)
            second++
        }
    }
    return res;
}

console.log(mergeTwo([5,6,7], [3,4,8,9,18,20,24]))