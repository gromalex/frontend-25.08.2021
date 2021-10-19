// // Урок 3, задача 2
// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const arr2 = [-5, 4, -3, -3, 10, -1, 8, 25, 0]

// function findPositiveNumbers(array = []) {
//   const arrNew = []

//   for (let item of array) {
//     if (item > 0) {
//       arrNew.push(item)
//     }
//   }

//   return arrNew
// }

// const result = findPositiveNumbers()
// console.log(findPositiveNumbers(arr))
// console.log(findPositiveNumbers(arr2))
// console.log(result)

// // Урок 3, задача 3
// const arr3 = [5, 4, 3, 8, 0]

// function filterFor(array, a) {
//   const arrNew = []

//   for (let item of array) {
//     if (item >= a) {
//       arrNew.push(item)
//     }
//   }

//   return arrNew
// }

// console.log(filterFor(arr3, 5))

// DOM
console.log(document)

// Навигация
const titleElement = document.querySelector('h1')
console.dir(titleElement) // object
console.log(titleElement)

const textElement = document.querySelector('.text')
console.log(textElement)

const linkElement = document.querySelector('#linkElement')
console.log(linkElement)

const listItemsElement = document.querySelectorAll('li') // NodeList
console.log(listItemsElement)
console.log(Array.isArray(listItemsElement)) // false

for (let listItemElement of listItemsElement) {
  console.log(listItemElement)
}

// Содержимое элементов
// Текст внутри элементов
const contentTitleElement = titleElement.textContent
console.warn(contentTitleElement)

// HTML внутри элементов
const contentLinkElement = linkElement.innerHTML
console.log(contentLinkElement)

linkElement.innerHTML = '<span>Link name from JS</span>'

// Работа с атрибутами
// Получить значение атрибута
const hrefValue = linkElement.getAttribute('href')
console.log(hrefValue)
// Установить значение атрибуту
linkElement.setAttribute('href', 'https://learn.javascript.ru/array-methods')
// Проверка атрибута
if (!linkElement.hasAttribute('target')) {
  linkElement.setAttribute('target', '_blank')
}

// Стили
// titleElement.style.color = 'red'
// titleElement.style.fontSize = '32px'

// Работа с классами
// Добавить класс
titleElement.classList.add('title')

// Проверить наличие класса
if (textElement.classList.contains('text-muted')) {
  // Удаление класса
  textElement.classList.remove('text-muted')
}

// Создание элементов
const text2Element = document.createElement('p')
text2Element.textContent = 'Параграф'
console.log(text2Element)

const cloneText2Element = text2Element.cloneNode(true) // клонировать элемент
cloneText2Element.textContent = 'Параграф 2'

// Добавление элементов
const bodyElement = document.querySelector('body')
bodyElement.append(text2Element) // добавить последним в body
bodyElement.prepend(cloneText2Element) // добавить первым в body
titleElement.after(cloneText2Element) // добавить после h1
titleElement.before(cloneText2Element) // добавить перед h1

// Удаление элементов
document.querySelector('ul').remove()

// TODO:
// 1. Для каждого элемента массива создать ссылку (a)
// 2. Уставить атрибуту href значение из массива
// 3. В контент ссылки добавить Link n, где n — индекс ссылки из массива
// 4. Добавить в body

const links = [
  'https://learn.javascript.ru/',
  'http://online.myfreedom.by/pl/teach/control/lesson/view?id=219299273&editMode=0',
  'https://learn.javascript.ru/structure'
]

let index = 1
for (let link of links) {
  const linkElement = document.createElement('a')
  linkElement.setAttribute('href', link)
  linkElement.textContent = 'Link ' + index
  bodyElement.append(linkElement)
  index++
}
