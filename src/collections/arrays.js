// 1. Define an array
const arr1 = []
console.log(`1. Empty array: ${arr1}`)

// 2. append new value to the array
const arr2 = []
arr2.push(2)
console.log(`2. Append array: ${arr2}`)

const arr3a = [1, 2, 3, 4]
arr3a.length = 2
console.log(`3a. Remove element from array by setting length: ${arr3a}`)
// #> [1, 2]

const arr3b = [1, 2, 3, 4]
console.log(`3b. Remove first element of array: ${arr3b.shift()}`)
console.log(arr3b)
// #> [1, 2]

const arr4 = ['a', 'bee', 'see', 'thee']
console.log(`4. Iterate an array: ${arr4}`)
arr4.forEach(element => {
  console.log(element)
})

const arr5 = ['a', 'bee', 'see', 'thee']
console.log(`5. Check if element exists: ${arr5}`)



console.log('End of Array script')
