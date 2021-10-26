// ДЗ
// 1.
const listItemsElement = [...document.querySelectorAll('li')]
const listElement = document.querySelector('ul')

console.log(Array.isArray(listItemsElement)) // true

const listItemsElementWithEven = listItemsElement.filter((element) => element.textContent % 2 == 0)

console.log(listItemsElementWithEven)

listElement.innerHTML = '' // сделать пустым
listItemsElementWithEven.forEach((element) => listElement.append(element))

// 2.
const formTemplate = `
  <form class="p-3" style="max-width: 400px;">
    <fieldset>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
      </div>
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">Disabled select menu</label>
        <select id="disabledSelect" class="form-select">
          <option>Option 1</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
`

// document.body.innerHTML = document.body.innerHTML + formTemplate
// document.body.insertAdjacentHTML('beforeend', formTemplate)

function generateListElement () {
  const listElement = document.createElement('ul')
  let counter = 1

  setInterval(() => {
    const listItemElement = document.createElement('li')

    listItemElement.textContent = 'List item ' + counter
    listElement.append(listItemElement)

    counter++
  }, 1000)

  document.body.append(listElement)
}

// generateListElement()

// Деструктуризация

// Массив
// let a = 10
// let b = 20

// let [a, b, object, d = 0] = [10, 20, { prop1: 'val1', prop2: 'val2' }]

// console.log(a, b, object, d)

// Объект
const object = { a: 'value 1', b: 'value 2' }

let { a, b: bVar = '0', c = '0' } = { a: 'value 1', b: 'value 2' }
// let bVar = object.b

console.log(a, bVar, c)

const person = {
  name: 'Ivan',
  age: 24
}

function showHello ({ name, age }) {
  console.log('Hello ' + name + ' ' + age)
}

showHello(person)

// Callbacks
function showSuccess () {
  console.log('Доступ разрешен')
}

function showError () {
  console.error('Доступ запрещен')
}

function showQuestion (resolve, reject) {
  const result = confirm('Вам есть 18 лет?')

  if (result) {
    resolve()
  } else {
    reject()
  }
}

// showQuestion(showSuccess, showError)

// showQuestion(() => {
//   alert('Доступ разрешен')
// }, () => {
//   alert('Доступ запрещен')
// })

// TODO: collapse
const toggleCollapseBlockElement = document.querySelector('#toggleCollapseBlock')
const collapseBlockElement = document.querySelector('#collapseBlock')

toggleCollapseBlockElement.addEventListener('click', () => {
  if (collapseBlockElement.classList.contains('active')) {
    collapseBlockElement.classList.remove('active')
    toggleCollapseBlockElement.textContent = 'Показать текст'
  } else {
    collapseBlockElement.classList.add('active')
    toggleCollapseBlockElement.textContent = 'Спрятать текст'
  }

  // collapseBlockElement.classList.toggle('active')
})


// TODO: menu
const [toggleMenuElement, menuElement] = [
  document.querySelector('#toggleMenu'),
  document.querySelector('#menu')
]

function handleToggleMenu () {
  if (menuElement.classList.contains('active')) {
    menuElement.classList.remove('active')
    toggleMenuElement.textContent = '🍔'
  } else {
    menuElement.classList.add('active')
    toggleMenuElement.textContent = '❌'
  }
}

toggleMenuElement.addEventListener('click', handleToggleMenu)


// Делегирование событий
