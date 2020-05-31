const array1 = [1, 2, 3]
console.log(`1. Array declaration: ${array1}`)

const arr1b = []
console.log(`1b. Declare an empty array: ${arr1b}`)

const array2 = [1, 2, 3]
console.log(`2a. Check element exists: ${array2.indexOf(4)}`) // -1
console.log(`2b. Check element exists: ${array2.indexOf(1)}`) // 0

const array3 = [1, 2, 3]
console.log(`3. Appending element to array: ${array3.push(5)}`) // returns new length
console.log(`3b. Appending element to array: ${array3}`) // 1, 2, 3, 5

const arr4a = [1, 2, 3, 4]
arr4a.length = 2
console.log(`4a. Remove element from array by setting length: ${arr4a}`)
// #> [1, 2]

const arr4b = [1, 2, 3, 4]
console.log(`4b. Remove first element of array: ${arr4b.shift()}`)
console.log(arr4b)
// #> [1, 2]

const arr5 = ['a', 'bee', 'see', 'thee']
console.log(`5. Iterate an array: ${arr5}`)
arr5.forEach(element => {
  console.log(element)
})

const arr5b = ['a', 'bee', 'see', 'thee']
console.log(`5b. Iterate an array with index: ${arr5b}`)
arr5b.forEach((element, i) => {
  console.log(element, i)
})

const array6 = [1, 3]
console.log(`6. Clone an array by: ${JSON.parse(JSON.stringify(array6))}`)

const array7 = [1, 3]
console.log(`7. Reverse contents of an array: ${array7.reverse()}`)

const array8a = [1, 2, 3, 4]
const array8b = ['a', 'b', 'c', 'd']
const array8c = array8a.map((e, i) => [e, array8b[i]])
console.log(`8. Zipping 2 arrays with map: ${array8c.join('|')}`)

const array9 = [1, 2, 3]
console.log(`9. Joining array elements into a string: ${array9.join(' & ')}`)

const array10 = [1, 2, 3]
array10.length = 0
console.log(`10. Clearing an array by setting length to 0: ${array10}`)

const object10 = {}
console.log(`11. Check data if array: ${Array.isArray(object10)}`)

const array12 = [1, 2, 3]
console.log(`12. Get subset of array with slice: ${array12.slice(1)}`)

console.log('End of Array script')
