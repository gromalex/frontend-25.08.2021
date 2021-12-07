import { Car } from './car'

class SportCar extends Car {
  currentSpeed = 0
  isWorking = false

  constructor (props) {
    super(props)
    this.maxSpeed = props.maxSpeed || 1
  }

  start () {
    this.isWorking = true
  }

  stop () {
    this.isWorking = false
  }

  speedUp (value) {
    if (!this.isWorking) {
      console.warn('Запусти двигатель!')
      return
    }

    const currentSpeed = this.currentSpeed + value

    if (currentSpeed >= this.maxSpeed) {
      const message = new Error(`Текущая скорость ${this.currentSpeed} не может быть больше чем ${this.maxSpeed}`)
      console.error(message)
      return
    }

    this.currentSpeed += value
  }
}

export { SportCar }
