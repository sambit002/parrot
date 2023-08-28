/**
 * given n number of stairs
 * how many ways are there to climb those stairs
 * can climb 1 or 2 steps at a time
 */

const climbingStaircase = (n) => {
    const noOfWays = [1, 2];
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
        console.log(noOfWays);
    }
    return noOfWays[n - 1];
}

console.log(climbingStaircase(5));