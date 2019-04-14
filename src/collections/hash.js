// 1. Define a hash
const hash1 = {}
console.log(`1. Empty hash: ${hash1}`)


// 4. Iterate over a hash
const hash4 = {a: 1, b: 2}
console.log(`4. Iterate a hash: ${hash4}`)
Object.keys(hash4).forEach( => {
  console.log(`key: ${key}: ${hash4[key]}`)
}
