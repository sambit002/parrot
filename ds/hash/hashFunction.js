// here we shall be writing our first hash function
const hash = (key, arrLen) => {
    let total = 0
    for (let char of key) {
        console.log(char)
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrLen 
    }
    return total
}

console.log(hash("sambit", 3))