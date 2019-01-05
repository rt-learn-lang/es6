import { Vehicle } from './vehicle.js'

export class Car extends Vehicle {
  constructor(licenseNumber) {
    // This is required, regardless if you omit the constructor in Vehicle
    // because there will be an implied costructor if you try to omit the one in
    // Vehicle class.
    super(licenseNumber)
    this.gpsEnabled = false
    console.log('constructing Car')
  }

  start() {
    super.start()
    console.log('Starting car...')
  }

  static getCompanyName() {
    super.getCompanyName()
    console.log('My Other Company')
  }
}
