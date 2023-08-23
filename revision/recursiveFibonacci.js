/**
 * recursive solution
 * finding nth fibonacci number
 */

/**
 * Fibonacci sequence is a sequence of numbers
 * where each number is the sum of previous two numbers
 * in the sequence
 */

/** 
 * time complexity of recursive fibonacci solution
 * is 2 to the power n, which is terrible :(
 * iterative solution is far more optimal
 */

const recursiveFibonacci = (n) => {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

// console.log(recursiveFibonacci(10));

const iterativeFibonacci = (n) => {
    let first = 0;
    let second = 1;
    if (n < 2) return n;
    for (let i = 1; i < n; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
}

console.log(iterativeFibonacci(10));