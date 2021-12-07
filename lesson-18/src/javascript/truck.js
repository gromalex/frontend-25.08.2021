import { Car } from './car'

class Truck extends Car {
  cargoCabin = []

  constructor (props) {
    super(props)
    this.maxSlots = props.maxSlots || 1
  }

  addCargo (item) {
    if (this.cargoCabin.length < this.maxSlots) {
      this.cargoCabin.push(item)
    } else {
      const error = new Error(this.brand + ' перегружен.')
      console.error(error)
    }
  }
}

export { Truck }
