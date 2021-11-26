// Переадресация вызова (call/apply)
// Привязка контекста к функциям (bind)

function calcSum (objectName) {
  console.log(objectName + ': ' + (this.a + this.b))
}

// calcSum()

const nums = {
  a: 10,
  b: 15,
  // calcSum
}

// nums.calcSum()
calcSum.call(nums, 'nums')
calcSum.apply(nums, ['nums'])

const calcSumNums = calcSum.bind(nums)
calcSumNums('nums')

class Button {
  counter = 0

  constructor(buttonElement) {
    this.buttonElement = buttonElement

    this.handleClick = this._handleClick.bind(this)

    this.buttonElement.addEventListener('click', this.handleClick)

  }

  _handleClick () {
    console.log(this)
    if (this.counter >= 10) {
      this.buttonElement.removeEventListener('click', this.handleClick)
      return
    }

    this.counter++
    console.log('Click: ' + this.counter)
  }
}

const buttonElement = document.querySelector('#button')
console.log(buttonElement)
new Button(buttonElement)
