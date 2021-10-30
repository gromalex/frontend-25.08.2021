// ДЗ

// Задание 1
const inputElement = document.querySelector('#input')
const listElement = document.querySelector('#list')

function handleKeypressInput (event) {
  const { key } = event
  const listItemElement = document.createElement('li')

  listItemElement.textContent = key
  listElement.append(listItemElement)
}

// inputElement.addEventListener('keypress', handleKeypressInput)

// Задание 2
const outputElement = document.querySelector('#output')

function handleInput (event) {
  const { value } = event.target
  // const { value } = inputElement
  outputElement.textContent = value
}

inputElement.addEventListener('input', handleInput)

// Задание 3
const formElement = document.querySelector('#formId')
const formInputElement = document.querySelector('#formInput')

function handleSubmitForm (event) {
  event.preventDefault()
  const { value } = formInputElement

  const listItemElement = document.createElement('li')

  listItemElement.textContent = value
  listElement.append(listItemElement)

  formElement.reset()
}

formElement.addEventListener('submit', handleSubmitForm)

// Делегирование
// const listItemsElement = [...listElement.querySelectorAll('li')]

// function handleMouseEnter (event) {
//   const { target, currentTarget } = event

//   // target.style.color = 'blue'

//   console.log(currentTarget)
// }

function handleClick (event) {
  const { target, currentTarget } = event
  // currentTarget == this

  if (target.tagName == 'LI') {
    target.style.color = 'blue'
  }

  console.log(this)
}

// listItemsElement.forEach((element) => {
//   element.addEventListener('mouseenter', handleMouseEnter)
//   element.addEventListener('mouseleave', handleMouseLeave)
// })

// listElement.addEventListener('mouseenter', handleMouseEnter)
listElement.addEventListener('click', handleClick)

const listItemElement = document.createElement('li')
listItemElement.textContent = 'New List Item'
listItemElement.classList.add('bg-secondary')
listElement.append(listItemElement)

// Замыкание

function foo () {
  let test = 'Test'

  function fooInner () {
    console.log(test)
  }

  return fooInner
}

console.log(foo())

const fooInner = foo()

fooInner()
fooInner()


function getCounter () {
  let counter = 0

  function incrementCounter () {
    console.log(counter)
    counter = counter + 1
  }

  return incrementCounter
}

const counter = getCounter()

counter()
counter()
counter()

const counter2 = getCounter()

counter2()
counter2()
counter2()

// IIFE (самовызывающаяся анонимная функция)

;(function () {
  var element = document.querySelector('h1')
  console.log('IIFE (самовызывающаяся анонимная функция)')
})()


;(function () {
  var element = document.querySelector('h1')
  console.log('IIFE (самовызывающаяся анонимная функция)')
})()
