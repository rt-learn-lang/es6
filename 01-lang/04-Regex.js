const re1 = /[a-e]+/
console.log(`1. Regex literal: ${re1}`)

const re2 = /\w+\[(\d+)\]/ // Will get the number part inside the brackets
const text2 = 'false[3]'
console.log(`2. Getting a capture group: ${text2.replace(re2, '$1')}`)
