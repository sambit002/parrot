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
    
    values() {
        let vals = []
        if (!this.keyMap.length) return vals
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!vals.includes(this.keyMap[i][j][1]))
                        vals.push(this.keyMap[i][j][1])
                }
            }
        }
        return vals
    }

    keys() {
        let keys = []
        if (!this.keyMap.length) return keys
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0]))
                        keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }
}

let ht = new HashTable(17)
ht.set("Sam", "Jeuty")
ht.set("psg", "france")
ht.set("milan", "italy")
ht.set("bayern", "germany")
console.log(ht.keyMap)
console.log(ht.values())
console.log(ht.keys())