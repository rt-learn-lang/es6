import { Vehicle } from './classes/vehicle.js'
import { Car } from './classes/car.js';

let car1 = new Car('A123');
console.log(`car1 is instance of Car: ${car1 instanceof Car}`)
console.log(`car1 is instance of Vehicle: ${car1 instanceof Vehicle}`)
console.log(`car1 is instance of Object: ${car1 instanceof Object}`)
console.log(`License Number: ${car1.licenseNumber}`)
console.log(`GPS enabled?: ${car1.gpsEnabled}`)
car1.start()

// Can inherit class method.
Car.getCompanyName()

// car1.getCompanyName()  // wont work.