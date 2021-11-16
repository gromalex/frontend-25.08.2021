const data = []

window.addEventListener('data:added', () => {
  alert('Вы добавили новый item')
})

function addItem (item) {
  data.push(item)

  const event = new Event('data:added', )
  window.dispatchEvent(event)
}

// addItem('34535634')
// addItem('34532352344')

// ООП
function UserConstructor(firstName, lastName) {
  // this = {}
  this.firstName = firstName
  this.lastName = lastName

  this.showInfo = function () {
    console.log(this.firstName + ' '+ this.lastName)
  }
  // return this
}

const user = new UserConstructor('Alexander', 'Petrov')
const user2 = new UserConstructor('Alexander', 'Sidorov')

class User {
  #isAdmin = false
  static description = 'Этот класс нужен для создания user объектов'

  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  showInfo () {
    console.log(this.firstName + ' '+ this.lastName + ' — ' + this.#isAdmin)
  }

  setAdmin () {
    this.#isAdmin = true
  }

  static findUserById (id) {
    console.log('User найден')
  }
}

const user3 = new User('Alexander', 'Petrov')
const user4 = new User('Alexander', 'Sidorov')

console.log(user3, user4)

// console.log(user3.#isAdmin) // error

user3.setAdmin()
// user3.#showInfo()

console.log(User.description)
console.log(user3.description) // undefined

User.findUserById('3456u56756g4')

class Car {
  type = 'passenger'

  constructor (brand, year) {
    this.brand = brand
    this.year = year
  }

  showInfo () {
    console.log(this.brand + ' '+ this.year + ' — ' + this.type)
  }
}

const car = new Car('BMW', '2005')

console.log(car)

class Truck extends Car {
  type = 'truck'

  constructor(brand, year, power) {
    super(brand, year)
    this.power = power
  }

  showInfo () {
    super.showInfo()
    console.log('Power' + '=' + this.power)
    // console.log(this.brand + ' '+ this.year + ' — ' + this.type + ' ' + 'Power' + '=' + this.power)
  }
}

const truck = new Truck('Volvo', '2011', '1000')
truck.showInfo()
console.log(truck)

class Rectangle {
  constructor (width, height, color) {
    this.width = width
    this.height = height
    this.color = color

    this.render()
  }

  #creteTemplate () {
    const area = this.#calcArea()

    return `
      <div style="
        width: ${this.width}px;
        height: ${this.height}px;
        background-color: ${this.color};
      ">S=${area}px2</div>
    `
  }

  #calcArea () {
    return this.width * this.height
  }

  render () {
    const template = this.#creteTemplate()
    document.body.innerHTML += template
  }
}

const rectangle1 = new Rectangle(150, 80, 'red')
// rectangle1.render()

const rectangle2 = new Rectangle(300, 200, 'blue')
// rectangle2.render()

new Rectangle(600, 100, 'gray')
