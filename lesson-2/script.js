// // Разбор дз
// // Задание 1
// let number1 = prompt('Введите любое число', '0')
// let number2 = prompt('Введите любое число еще раз', '0')

// if (number1 > number2) {
//   console.log(number1)
// } else if (number1 < number2) {
//   console.log(number2)
// } else {
//   console.log('Числа равны!')
// }

// // Задание 2
// let counter = prompt('Введите любое число')

// for (let i = 0; i < counter; i++) {
//   console.log(i * i)
// }

// // Задание 3
// let name1 = prompt('Введите имя №1')
// let name2 = prompt('Введите имя №2')
// let name3 = prompt('Введите имя №3')

// alert(name1 + ' ' + name2 + ' ' + name3)
// // alert(`${name1} ${name2} ${name3}`)

// let num1 = +prompt('Введите число №1') // Number()
// let num2 = +prompt('Введите число №2')
// let num3 = +prompt('Введите число №3')

// alert(num1 + num2 + num3)

// Преобразование типов
// Строковое, Числовое, Логическое
console.log(Number('1222'))
console.log(String(500))
console.log(Boolean([])) // !!

// Неявное преобразование
console.log('Сумма ' + 500) // 'Сумма 500'
console.warn('0' - 10) // -10
console.log(null + 25) // 25

let a = prompt('Введите что-то')

if (a) {

} else {
  a = 'Иван'
}

"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // '  -9  5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// TODO:
// 1. Создать объект user, со свойствами name, age, phone, email, password
// 2. Измените значение password на новое
// 3. Добавьте свойство city
// 4. Удалите phone

const user = {
  name: 'Alex',
  age: 30,
  phone: '+3434235646',
  email: 'test@email.com',
  password: 'hfybw8734hg83472'
}

console.log('name: Alex')

for (let prop in user) {
  console.log(prop + ': ' + user[prop])
}

user.password = 'wejfnbu2bu2bg'
user.city = 'Minsk'
delete user.phone
console.log(user)

// TODO:
// Есть объект:
const obj5 = {
  prop1: 'string',
  'prop 2': [1, 5, 6],
  prop3: {
    array: [55, 56, 56, { prop: 'string', key: [100] }]
  }
}
// Найти и вывести в консоль число 100

console.log(obj5.prop3.array[3].key[0])

const array = [12, 45, 56, 24, 79, 46]

console.log(array.length) // 6
array.push(67)
array.unshift(0)
array.pop()
array.shift()

const obj = {
  '0': 234,
  '1': 345,
  '2': 56
}

obj[0]

// Отличные примитивных типов данных от объектов
let str = 'String'
let b = str

str = 100

console.log(b) // 'String'

// -------------------------

const element = {
  name: 'DIV',
  display: 'block'
}

const element2 = element

element.width = '600px'

console.log(element2)
console.log(element == element2) // true

// -------------------------

const user1 = { // asjndfpuq394gh13728
  name: 'Alexey'
}

const user2 = { // asjdhgfyq3g4696794g6
  name: 'Alexey'
}

console.log(user1 == user2) // false

// -------------------------

let box1 = 34
let box2 = 34

console.log(box1 == box2)
