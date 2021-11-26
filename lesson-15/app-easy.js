class ToDoApp {
  data = []
  isEdit = false
  currentEditedToDo = {}
  formCreateElement = document.querySelector('#formCreate')
  listElement = document.querySelector('#list')

  constructor () {
    this.#init()
  }

  #init () {
    this.handleSubmit = this.#handleSubmit.bind(this)
    this.handleChange = this.#handleChange.bind(this)
    this.handleBeforeUnload = this.#handleBeforeUnload.bind(this)
    this.handleDOMReady = this.#handleDOMReady.bind(this)
    this.handleClickRemoveButton = this.#handleClickRemoveButton.bind(this)
    this.handleClickEditButton = this.#handleClickEditButton.bind(this)
    this.handleClickCancelEditButton = this.#handleClickCancelEditButton.bind(this)
    this.handleFormEditSubmit = this.#handleFormEditSubmit.bind(this)

    this.formCreateElement.addEventListener('submit', this.handleSubmit)
    this.listElement.addEventListener('change', this.handleChange)
    this.listElement.addEventListener('click', this.handleClickRemoveButton)
    this.listElement.addEventListener('click', this.handleClickEditButton)
    this.listElement.addEventListener('click', this.handleClickCancelEditButton)
    this.listElement.addEventListener('submit', this.handleFormEditSubmit)
    window.addEventListener('beforeunload', this.handleBeforeUnload)
    window.addEventListener('DOMContentLoaded', this.handleDOMReady)
  }

  #handleSubmit (event) {
    event.preventDefault()

    const toDo = {
      id: new Date().getTime(),
      isChecked: false,
    }

    const formData = new FormData(this.formCreateElement)
    for (let [name, value] of formData.entries()) {
      toDo[name] = value
    }

    this.data.push(toDo)
    this.formCreateElement.reset()

    this.render()
  }

  #handleChange (event) {
    const { target } = event
    const { id, checked, type } = target

    if (type == 'checkbox') {
      this.data.forEach((item) => {
        if (item.id == id) {
          item.isChecked = checked
        }
      })

      this.render()
    }
  }

  #handleBeforeUnload () {
    const json = JSON.stringify(this.data)
    localStorage.setItem('data', json)
  }

  #handleDOMReady () {
    const dataFromStorage = localStorage.getItem('data')

    if (dataFromStorage) {
      this.data = JSON.parse(dataFromStorage)

      this.render()
    }
  }

  #handleClickRemoveButton (event) {
    const role = event.target.getAttribute('data-role')
    const id = event.target.getAttribute('data-id')

    if (role == 'remove') {
      this.data = this.data.filter((item) => item.id != id)

      this.render()
    }
  }

  #handleClickEditButton (event) {
    const { target } = event
    const { role, id } = target.dataset

    if (role == 'edit') {
      if (this.isEdit) {
        alert('Уже редактируется')
        return
      }

      this.data.forEach((item) => {
        if (item.id == id) {
          this.currentEditedToDo = item
          const { parentElement } = target
          const formEditElement = this.formEditTemplate(item)

          parentElement.outerHTML = formEditElement
          this.isEdit = true
        }
      })
    }
  }

  #handleClickCancelEditButton (event) {
    const { role } = event.target.dataset

    if (role == 'cancelEdit') {
      this.render()
      this.isEdit = false
    }
  }

  #handleFormEditSubmit (event) {
    event.preventDefault()
    const { target } = event
    const { role, id } = target.dataset

    if (role == 'editForm') {
      const content = target.querySelector('[name="content"]').value
      this.currentEditedToDo.content = content

      this.render()
      this.isEdit = false
    }
  }

  // -----------------------------------------------------------------------------------------------

  createToDoTemplate ({id, content, isChecked}) {
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

  formEditTemplate ({ content }) { // toDo
    const template = `
      <div class="island__item" id="formEditContainer">
        <form class="d-flex" data-role="editForm">
          <div class="flex-grow-1">
            <input type="text" class="form-control form-control-sm" name="content" placeholder="Введите задачу" required value="${content}">
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

  createToDoElements () {
    let result = ''

    this.data.forEach((toDo) => {
      result = result + this.createToDoTemplate(toDo)
    })

    return result
  }

  render () {
    const toDoElements = this.createToDoElements()
    this.listElement.innerHTML = toDoElements
  }
}

new ToDoApp()
