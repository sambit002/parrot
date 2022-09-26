// here I shall be writing a hash table class
// we prevent collision by linear probing and separate chaining
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) { //here key is the string
        let total = 0
        let prime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let val = char.charCodeAt(0) - 96
            total = (total + prime + val) % this.keyMap.length
        }
        return total
    }

    set(key, val) {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, val])
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            return this.keyMap[index]
        }
        return undefined

    }
}

let ht = new HashTable()
ht.set("Sam", "Jeuty")
console.log(ht)