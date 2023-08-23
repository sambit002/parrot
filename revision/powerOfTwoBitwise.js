/**
 * check n is power of two
 * using bitwise operators
 * Except 1, any number in binary
 * which is a power of two, ends with zero
 * bitwise & will be 1 if both numbers are 1
 */

const powerOfTwoBitwise = (n) => {
    if (n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}

console.log(powerOfTwoBitwise(16));

