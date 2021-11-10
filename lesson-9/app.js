let data = []
let isEdit = false
let currentEditedToDo = {}
const formCreateElement = document.querySelector('#formCreate')
const listElement = document.querySelector('#list')

function handleSubmit (event) {
  event.preventDefault()

  const toDo = {
    id: new Date().getTime(),
    isChecked: false,
  }

  const formData = new FormData(formCreateElement)
  for (let [name, value] of formData.entries()) {
    toDo[name] = value
  }

  data.push(toDo)
  formCreateElement.reset()

  render()
}

function handleChange (event) {
  const { target } = event
  const { id, checked, type } = target

  if (type == 'checkbox') {
    data.forEach((item) => {
      if (item.id == id) {
        item.isChecked = checked
      }
    })

    render()
  }
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

function handleClickEditButton (event) {
  const { target } = event
  const { role, id } = target.dataset

  if (role == 'edit') {
    if (isEdit) {
      alert('Уже редактируется')
      return
    }

    data.forEach((item) => {
      if (item.id == id) {
        currentEditedToDo = item
        const { parentElement } = target
        const formEditElement = formEditTemplate(item)

        parentElement.outerHTML = formEditElement
        isEdit = true
      }
    })
  }
}

function handleClickCancelEditButton (event) {
  const { role } = event.target.dataset

  if (role == 'cancelEdit') {
    render()
    isEdit = false
  }
}

function handleFormEditSubmit (event) {
  event.preventDefault()
  const { target } = event
  const { role, id } = target.dataset

  if (role == 'editForm') {
    const content = target.querySelector('[name="content"]').value
    console.log(content)
    currentEditedToDo.content = content
    console.log(currentEditedToDo)

    render()
    isEdit = false
  }
}

// -------------------------------------------------------------------------------------------------

function createToDoTemplate ({id, content, isChecked}) {
  const checkedAttr = isChecked ? 'checked' : ''

  const template = `
    <div class="island__item d-flex ${checkedAttr}">
      <div class="form-check form-check-lg">
        <input class="form-check-input" ${checkedAttr} type="checkbox" id="${id}">
        <label class="form-check-label" for="${id}">${content}</label>
      </div>

      <button type="button" data-role="edit" data-id="${id}" class="btn btn-sm btn-primary ms-auto">
        <svg class="pe-none" width="16" height="16"><use href="#pencil"/></svg>
      </button>

      <button type="button" data-role="remove" data-id="${id}" class="btn btn-sm btn-danger ms-3">
        <svg class="pe-none" width="16" height="16"><use href="#trash"/></svg>
      </button>
    </div>
  `

  return template
}

function formEditTemplate ({ content }) { // toDo
  const template = `
    <div class="island__item" id="formEditContainer">
      <form class="d-flex" data-role="editForm">
        <div class="flex-grow-1">
          <input type="text" class="form-control form-control-sm" name="content" placeholder="Введите задачу" required value="${content}"> // toDo.content
        </div>
        <div class="ms-3">
          <button type="submit" class="btn btn-sm btn-primary">
            <svg class="pe-none" width="16" height="16"><use href="#save"/></svg>
          </button>
          <button type="button" data-role="cancelEdit" class="btn btn-sm btn-warning ms-3">
            <svg class="pe-none" width="16" height="16"><use href="#cancel"/></svg>
          </button>
        </div>
      </form>
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

formCreateElement.addEventListener('submit', handleSubmit)
listElement.addEventListener('change', handleChange)
listElement.addEventListener('click', handleClickRemoveButton)
listElement.addEventListener('click', handleClickEditButton)
listElement.addEventListener('click', handleClickCancelEditButton)
listElement.addEventListener('submit', handleFormEditSubmit)
window.addEventListener('beforeunload', handleBeforeUnload)
window.addEventListener('DOMContentLoaded', handleDOMReady)
