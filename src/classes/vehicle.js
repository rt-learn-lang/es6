export class Vehicle {
  constructor(licenseNumber) {
    this.gpsEnabled = true
    this.licenseNumber = licenseNumber
    console.log('constructing Vehicle')
  }

  start() {
    console.log('Starting vehicle...')
  }

  static getCompanyName() {
    console.log('My Company')
  }
}
