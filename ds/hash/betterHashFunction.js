// here we shall try to improve the hash function by introducing prime numbers
// prime numbers help to make keys more dispersed
// it also helps if the array length is prime value

// so lets wrie about it :)

const primeHash = (str, len) => {
    let tot = 0
    let prime = 31
    for (let i = 0; i < Math.min(str.length,100); i++) {
        let char = str[i]
        let val = char.charCodeAt(0) - 96
        tot = (tot + prime + val) % len
    }
    return tot
}

console.log(primeHash("fruitnnutmnmmnmnm", 17))