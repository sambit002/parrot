// this shall be a implementation as shown in Udemy :)

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

console.log(mergeArray([1,5], [2,4,6,8]))