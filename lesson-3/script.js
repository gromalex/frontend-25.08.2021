// Разбор ДЗ
const arr = [8, 123, 4, 5, 245, 346, 345, 7, 23, 76]

// console.log(arr[0])
// console.log(arr[1])

// const arrLength = arr.length
// for (let i = 0; i < arrLength; i++) {
//   console.log(arr[i])
// }

// Задача 1
let sum = 0
let sumEven = 0
for (let item of arr) {
  console.log(item)
  sum = sum + item

  if (item % 2 == 0) {
    sumEven = sumEven + item
  }
}
console.log('Сумма: ', sum)
console.log('Сумма четных: ', sumEven)

// Задача 2
let arr2 = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let positiveItemsArr = []
for (let item of arr2) {
  if (item > 0) positiveItemsArr.push(item)
}

console.log(positiveItemsArr)

// Задача 3
const arr3 = [5, 4, 3, 8, 0]
const resultArr = []
const limit = 5

for (let item of arr3) {
  if (item >= limit) resultArr.push(item)
}

// Задача 4
const cars = [
  { name: 'BMV', speed: 220 },
  { name: 'Toyota', speed: 160 },
  { name: 'KIA', speed: 140 },
  { name: 'Jeeli', speed: 120 },
]

for (let car of cars) {
  if (car.speed > 140) {
    console.log(car.name)
  }
}

// Задача 5
const positions = ['Frontend Developer', 'Manager', 'Backend Developer', 'UI/UX Designer']
const mapPositions = []

for (let position of positions) {
  mapPositions.push({
    word: position,
    length: position.length
  })
}

console.log(mapPositions)

for (let position of mapPositions) {
  console.log(position.word + ' - ' + position.length)
}


// Область видимости переменных
// Глобальная область ----------------------------
var a = 'var'
let b = 'let'
const c = 'const'

console.log(a, b, c)

// -----------------------------------------------
// Блочная область -------------------------------
if (true) {
  var a1 = 'var'
  let b1 = 'let'
  const c1 = 'const'
}

// console.log(a1, b1, c1) // error b1, c1

// -----------------------------------------------
// Область функции -------------------------------
function test() {
  var a2 = 'var'
  let b2 = 'let'
  const c2 = 'const'
}

// console.log(a2, b2, c2) // error a2, b1, c1

// -----------------------------------------------

// Хостинг переменных
console.log(userName) // всплытие

var userName = 'Alex'


// Function Declaration (Объявление Функции)
// seyHello()
// seyHello()
// seyHello()

function seyHello () {
  alert('Hello')
}

// console.log(seyHello())
// seyHello()


// Function Expression (Функциональное Выражение)
const seyHelloExpression = function () {
  alert('Hello')
}

// console.log(seyHelloExpression)
// seyHelloExpression()

// Посчитать и вывести в консоль сумму элементов в массиве из чисел.

// 1. Создать функцию calcSum(arr), принимает массив, как параметр
// 2. Считает сумму всех чисел в массиве
// 3. Возвращает результат

const numbers =[8, 123, 3, 5, 245, 346, 345, 7, 23, 76]
function calcSum (arr) {
  let sum = 0
  for (let number of arr) {
    sum = sum + number
  }

  if (sum == 0) {
    return 'Сумма не рассчиталась'
  }

  return sum

  console.log('After return')
}

function isEven (number) {
  if (number % 2 == 0) {
    return true
  }

  return false
}

const resultSum = calcSum(numbers) // 1181
alert(isEven(resultSum))
console.warn(resultSum)

function seyHelloUser(userName = 'Anonym') {
  alert('Hello ' + userName)
}

// seyHelloUser('Alexey')
// seyHelloUser('Olga')
// seyHelloUser()

function seyHelloUserWithFullName(firstName = 'Anonym', lastName = '') {
  alert('Hello ' + firstName + ' ' + lastName)
}

seyHelloUserWithFullName('Александр', 'Пушкин')
seyHelloUserWithFullName('Александр')
seyHelloUserWithFullName()
