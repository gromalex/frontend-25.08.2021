let data = []
const formElement = document.querySelector('#form')
const listElement = document.querySelector('#list')

function handleSubmit (event) {
  event.preventDefault()

  const toDo = {
    id: new Date().getTime(),
    isChecked: false
  }

  const formData = new FormData(formElement)
  for (let [name, value] of formData.entries()) {
    toDo[name] = value
  }

  data.push(toDo)
  formElement.reset()

  render()
}

function handleChange (event) {
  const { target } = event
  const { id, checked } = target

  console.log(target.dataset)

  data.forEach((item) => {
    if (item.id == id) {
      item.isChecked = checked
    }
  })

  console.log(data)
}

function handleBeforeUnload () {
  const json = JSON.stringify(data)
  localStorage.setItem('data', json)
}

function handleDOMReady () {
  const dataFromStorage = localStorage.getItem('data')

  if (dataFromStorage) {
    data = JSON.parse(dataFromStorage)

    render()
  }
}

function handleClickRemoveButton (event) {
  // const { role, id } = event.target.dataset
  const role = event.target.getAttribute('data-role')
  const id = event.target.getAttribute('data-id')

  if (role == 'remove') {
    data = data.filter((item) => {
      // if (item.id == id) {
      //   return false
      // } else {
      //   return true
      // }

      return item.id != id
    })

    render()
  }
}

// -------------------------------------------------------------------------------------------------

function createToDoTemplate ({id, content, isChecked}) {
  const checkedAttr = isChecked ? 'checked' : ''

  const template = `
    <div class="island__item d-flex">
      <div class="form-check form-check-lg">
        <input class="form-check-input" ${checkedAttr} type="checkbox" id="${id}">
        <label class="form-check-label" for="${id}">${content}</label>
      </div>

      <button type="button" data-role="remove" data-id="${id}" class="btn btn-sm btn-danger ms-auto">
        Удалить
      </button>
    </div>
  `

  return template
}

function createToDoElements () {
  let result = ''

  data.forEach((toDo) => {
    result = result + createToDoTemplate(toDo)
  })

  return result
}

function render () {
  const toDoElements = createToDoElements()
  listElement.innerHTML = toDoElements
}

formElement.addEventListener('submit', handleSubmit)
listElement.addEventListener('change', handleChange)
listElement.addEventListener('click', handleClickRemoveButton)
window.addEventListener('beforeunload', handleBeforeUnload)
window.addEventListener('DOMContentLoaded', handleDOMReady)
