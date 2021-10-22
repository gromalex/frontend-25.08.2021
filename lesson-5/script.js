// ДЗ
// Задача 1
// function createTag (tagName, color, content) {
//   return `<${tagName} style="${color}">${content}</${tagName}>`
// }

function createElement(tagName = 'div', content = '', styles = false) {
  console.log(arguments)
  const element = document.createElement(tagName)

  element.innerHTML = content

  if (styles) {
    for (let property in styles) {
      element.style[property] = styles[property]
    }
  }

  return element
}

document.body.append(createElement('h2', 'Title level 2 &#9733;', { color: 'blue' }))

// Задача 2
const paragraphElement = createElement(
  'p',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nobis.',
  { fontSize: '32px', fontWeight: 'bold' }
)

document.body.append(paragraphElement)

// Задача 3
function createSelectElement(options = []) {
  const selectElement = createElement('select')

  for (let option of options) {
    const optionElement = createElement('option', option)
    // optionElement.setAttribute('value', option) // or
    optionElement.value = option

    selectElement.append(optionElement)
  }

  return selectElement
}

const years = []

for (let i = 1960; i <= 2020; i++) {
  years.push(i)
}

const selectElement = createSelectElement(years)
document.body.append(selectElement)

// Задача 4
const users = [
  {
    name: "Женя",
    order: true
  },
  {
    name: "Кристина",
    order: true
  },
  {
    name: "Павел",
    order: false
  },
  {
    name: "Виолетта",
    order: false
  },
  {
    name: "Костя",
    order: true
  }
]

function buildContentElement (userName, isPaid) {
  let status = ''

  // if (isPaid) {
  //   status = 'оплатил'
  // } else {
  //   status = 'отменил'
  // }

  // or

  isPaid ? status = 'оплатил' : status = 'отменил'

  return `Клиент ${userName} ${status} заказ`
}

const listElement = createElement('ul')

for (let item of users) {
  const content = buildContentElement(item.name, item.order)
  const listItemElement = createElement('li', content)

  listElement.append(listItemElement)
}

document.body.append(listElement)

// Методы объектов
// this в объектах
function showFullName () {
  console.log(this.firstName + ' ' + this.lastName)
}

const user1 = {
  firstName: 'Ivan',
  lastName: 'Petrov',
  showFullName: showFullName
}

const user2 = {
  firstName: 'Petr',
  lastName: 'Ivanov',
  showFullName
}

// showFullName(user1.firstName, user1.lastName)
user1.showFullName()
user2.showFullName()

// TODO: group1.calcAverageScope() -> 'Group 1 — 7.5'

function calcAverageScope () {
  let sum = 0
  let scopes = this.scopes

  for (let scope of scopes) {
    sum = sum + scope
  }

  let averageScope = sum / scopes.length

  console.log(`${this.name} - ${averageScope}`)
}

const group1 = {
  name: 'Group 1',
  scopes: [8, 6, 4, 7, 5, 9],
  calcAverageScope
}

const group2 = {
  name: 'Group 2',
  scopes: [7, 6, 4, 8, 5, 2, 8, 6],
  calcAverageScope
}

group1.calcAverageScope()
group2.calcAverageScope()

// Стрелочная функция
const calcAverageScopeArrow = () => {
  let sum = 0
  let scopes = this.scopes

  console.log(this)

  for (let scope of scopes) {
    sum = sum + scope
  }

  let averageScope = sum / scopes.length

  console.log(`${this.name} - ${averageScope}`)
}

const group3 = {
  name: 'Group 3',
  scopes: [7, 6, 4, 8, 5, 2, 8, 6],
  // calcAverageScope: calcAverageScopeArrow,
}

const arrowFunction = (a, b ,c) => {
  // console.log(arguments) // error
  console.log(a, b ,c)
}

arrowFunction(12, 4, 5)

// group3.calcAverageScope()

// Функции-конструкторы
// 1. Название функции с заглавной буквы и сущ.
// 2. Вызывается с new

function Group (name, scopes = []) {
  // this = {}
  this.name = name
  this.scopes = scopes

  this.calcAverageScope = function () {
    let sum = 0
    let scopes = this.scopes

    for (let scope of scopes) {
      sum = sum + scope
    }

    let averageScope = sum / scopes.length

    console.log(`${this.name} - ${averageScope}`)
  }
  // return this
}

const group4 = new Group('Group 4', [5, 6, 8, 2, 7, 8])
const group5 = new Group('Group 5', [5, 6, 8, 2, 7, 8])

console.log(group4)
group4.calcAverageScope()
group5.calcAverageScope()
