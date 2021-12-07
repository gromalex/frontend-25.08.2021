class Car {
  constructor (props) {
    this.brand = props.brand || ''
    this.year = props.year || 0
    this.fuelRate = props.fuelRate || 0
  }

  getInfo () {
    console.log(this.brand, this.year, this.fuelRate)
  }

  calcFuel (distance) {
    return (this.fuelRate * distance) / 100
  }
}

export { Car }
