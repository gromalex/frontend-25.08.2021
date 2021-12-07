import '../scss/app.scss'

import { SportCar } from './proxy'


const sportCar = new SportCar({
  brand: 'BMV',
  year: 2020,
  fuelRate: 25,
  maxSpeed: 320
})

console.log(sportCar)

sportCar.start()
sportCar.speedUp(200)
sportCar.speedUp(200)
console.log('Ok')
