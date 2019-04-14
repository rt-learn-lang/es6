export default class Vehicle {
  constructor(licenseNumber) {
    this.gpsEnabled = true
    this.licenseNumber = licenseNumber
    console.log('constructing Vehicle')
  }

  /* eslint-disable class-methods-use-this */
  start() {
    console.log('Starting vehicle...')
  }
  /* eslint-enable class-methods-use-this */

  static getCompanyName() {
    console.log('My Company')
  }
}
