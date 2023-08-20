//revise fibonacci sequence

/**
 * Given a number n(input)
 * Find elements of Fibonacci sequence upto n
 */

/**   
 * below iterative solution is mine own
*/

const fibonacci = (n) => {
    let first = 0;
    let second = 1;
    let sum;
    console.log(first);
    console.log(second);
    for (let i = 0; i < n - 2; i++) {
        sum = first + second
        console.log(sum);
        first = second;
        second = sum;
    }
}

fibonacci(10);