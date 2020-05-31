const hash1 = {}
console.log(`1. Declaring an empty hash: ${hash1}`)

const hash2 = { a: 1, b: 2 }
console.log(`1. Declaring a non-empty hash: ${hash2}`)

const hash3 = {}
console.log(`3. Getting size of hash: ${Object.keys(hash3).length}`)

const hash4 = { a: 1, b: 2 }
console.log(`4. Retrieving element from hash: ${hash4.b}`)

const hash5 = { a: 1, b: 2 }
console.log(`5. Iterate over a hash: ${hash5}`)
Object.keys(hash5).forEach(key => {
  console.log(`key: ${key}, value: ${hash5[key]}`)
})

const hash6 = { b: 1, a: 2 }
console.log(`6. Get all keys: ${Object.keys(hash6)}`)

const hash7 = { a: 1, b: 2 }
console.log(`7. Get all value: ${Object.values(hash7)}`)

const hash8 = { a: 1, b: 2 }
hash8.newKid = 'Joe'
console.log(`8. Adding new attribute: ${Object.values(hash8)}`)

const hash9 = { a: 1, b: 2 }
hash8.newKid = 'Joe'
console.log(`9. Check if attribute exists: ${'a' in hash9}, ${'z' in hash9}`)
