// here we shall recursively try to 
// check if a pattern is a substring on a text

const exactmatch = (text, pat, tid, pid) => {
    if (tid === text.length && pid != pat.length) return 0
    
    if (pid === pat.length) {
        return 1
    }
    
    if (text[tid] === pat[pid]) {
        return exactmatch(text, pat, tid + 1, pid + 1)
    }
    
    return 0
}

const contains = (text, pat, tid, pid) => {
    // if we have reached the end
    // and we have no match, we return 0
    if (tid === text.length) return 0
    if (text[tid] === pat[pid]) {
        if (exactmatch(text, pat, tid, pid)) {
            return 1
        } else {
            return contains(text, pat, tid + 1, pid)
        }
    }
    return contains(text, pat, tid + 1, pid)
}

console.log(contains("Sambit", "Samz", 0, 0))