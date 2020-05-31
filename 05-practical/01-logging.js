// https://dev.to/guilhermetoti/stop-using-default-console-log-check-this-instead-2b3c?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email

const text1 = 'Royce'
console.log('1. % Interpolation, Hello %s', text1)

const text2 = 'Royce'
console.log(`2. Template String, Hello ${text2}`)

console.log('3. Styled, %c Works only in the browser console!', 'font-size: 26px; color: blue;')

console.warn('4. This is some warning')

console.error('5. This is some error')

console.info('6. Just a simple information')

// 7. Assertion
// console.assert(1 !== 1, '7. Assertion, 1 is equal to 1')

// 8. Display properties of dom element
// const dom8 = document.querySelector('p')
// console.dir(dom8)

// The following works well on chrome browser.
// 9. Grouping
const dogs9 = [{ name: 'Ricota', age: 2 }, { name: 'Gorgonzola', age: 8 }]
dogs9.forEach(dog => {
  console.group(`9. Grouping: ${dog.name}`) // This is the group title
  console.log(`Dog: ${dog.name}`)
  console.log(`Dog: ${dog.name} is ${dog.age} years old`)
  console.log(`Dog: ${dog.name} is ${dog.age * 7} years old for real`)
  console.groupEnd(dog.name) // To end the group, you MUST pass the same as you are using in your group title
})

// 10. Grouping, collapsed
const dogs10 = [{ name: 'Ricota', age: 2 }, { name: 'Gorgonzola', age: 8 }]
dogs10.forEach(dog => {
  console.groupCollapsed(`10. Group Collapsed, ${dog.name}`) // This is the group title
  console.log(`Dog: ${dog.name}`)
  console.log(`Dog: ${dog.name} is ${dog.age} years old`)
  console.log(`Dog: ${dog.name} is ${dog.age * 7} years old for real`)
  console.groupEnd(dog.name) // To end the group, you MUST pass the same as you are using in your group title
})

// 11. Table
const dogs11 = [{ name: 'Ricota', age: 2 }, { name: 'Gorgonzola', age: 8 }]
console.table(dogs11)

// 12. Clearing the logs
console.clear()
