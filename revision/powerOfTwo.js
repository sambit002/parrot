/**
 * math problem
 * power of two
 * n is a positive integer
 * determine if n is power of two
 */

const powerOfTwo = (n) => {
    // if n is negative, we return false
    if (n<1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) return false
        n = n/2;
    }

    return true;
}

console.log(powerOfTwo(32));