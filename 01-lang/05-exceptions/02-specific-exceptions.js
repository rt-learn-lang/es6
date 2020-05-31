// Throwing Exceptions

console.log('1. Syntax: Throwing a specific exception')

class SpecificException extends Error {
  constructor(message) {
    super()
    this.name = 'SpecificException'
    this.message = message || 'Specific Error Message'
  }
}

throw new SpecificException()
// throw new SpecificException('Custom error message')
