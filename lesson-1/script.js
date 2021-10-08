// Типы данных
console.log('Hello world') // String: ''
console.log(12) // Number: 0, 110.5, -25, NaN, Infinity, -Infinity
console.log(true, false) // Boolean
console.log(undefined) // Undefined
console.log(null) // Null
console.log({}, []) // Object

console.log(typeof 12)

// Переменные
let firstNum = 100
firstNum = 101
console.log(firstNum)

const pi = 3.14
// pi = 4 // error

// Ввод данных пользователем
alert('Hello from alert')

let age = prompt('Введите ваш возраст', '18') // возвращает строку или null
console.log(age)

let is18 = confirm('Вам есть 18 лет?')
console.log(is18)

// Математические операции
let result1 = 15 + 5
let result2 = 45 - result1
let result3 = result1 * 2
let result4 = result2 / 10
console.log(2 ** 3) // возведение в степень
console.log(17 % 5) // остаток от деления

// Конкатенация строк
let userName = 'Alexey'
console.log('Hello' + ' ' + userName)
console.log('Hello userName')
console.log(`Hello ${userName}`)

// Условия
// Операторы сравнения: ==, ===, >, <, >=, <=, !=, !==
// Логические операторы: && — И, || — или
let isAdmin = false

if (isAdmin == true) {
  alert('Доступ разрешен')
} else {
  alert('Доступ запрещен')
}

// -------------16++++18+++++++++++++++
if (age >= 18) {
  alert('Можно смотреть все')
} else if (age >= 16 && age < 18) {
  alert('Можно смотреть R+')
} else if (age < 16) {
  alert('Можно смотреть только мультфильмы')
}

let number = 10
let sum = 0

for (let i = 0; i <= number; i++) {
  sum = sum + i
  console.log(sum)
}

console.log(sum)
