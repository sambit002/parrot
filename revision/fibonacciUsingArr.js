/**
 * here we shall be writing down Fibonacci series using
 * an array for populating elements upto an input value n
 */

const fibonacci = (n) => {
    let fib = [0,1];
    for (let i=2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(10));