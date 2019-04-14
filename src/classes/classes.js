console.log('classes...')

class Drone {
  // Keep constructor light
  constructor(id, name) {
    // private instance variable by convention begins with an underscore
    this._id = id
    this.name = name
    console.log(`id: ${id} , name: ${name}`)
    console.log('Constructor called...')
  }

  // getter
  get id() {
    return this._id
  }

  // setter
  set id(value) {
    this._id = value
  }

  // instance method
  fly() {
    console.log(`Drone ${this.id} is flying`)
  }

  // class method. We can't access instance variables here.
  static getCompany() {
    console.log('getCompany')
    console.log(`Printing instance variable inside a class variable: ${this.name}`)  // #> undefined
    console.log(this.maxHeight) // #> 2000
    return 'IBM'
  }
}

// Class variable
Drone.maxHeight = 2000

console.log(typeof Drone) // #> function
const drone1 = new Drone(1234, 'First drone')

console.log(typeof drone1) // #> object
console.log(drone1 instanceof Drone) // #> true
console.log(`drone: ${drone1.id}, name: ${drone1.name}`)

/* eslint-disable dot-notation */
// Bracket notation (discouraged)
console.log(`drone: ${drone1['id']}, name: ${drone1['name']}`)
/* eslint-enable dot-notation */

const drone2 = new Drone('B456', 'Twirl')
console.log(drone2)

console.log(Drone.maxHeight)

// Class variables is not visible on the instance.
console.log(`Accessing class variable from an instance: ${drone1.maxHeight}`)
// #> undefined

drone1.fly()
drone2.fly()

// Calling a class method
console.log(`Drone company: ${Drone.getCompany()}`)
