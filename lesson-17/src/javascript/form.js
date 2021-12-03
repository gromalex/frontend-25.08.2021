class Form {
  constructor (data, formElement) {
    this.formElement = formElement
    this.data = data

    this.#init()
  }

  #init () {
    this.handleSubmit = this.#handleSubmit.bind(this)

    this.formElement.addEventListener('submit', this.handleSubmit)
  }

  #handleSubmit (event) {
    event.preventDefault()

    const toDo = {
      id: new Date().getTime(),
      isChecked: false,
    }

    const formData = new FormData(this.formElement)
    for (let [name, value] of formData.entries()) {
      toDo[name] = value
    }

    this.data.push(toDo)
    this.formElement.reset()

    console.log(this.data)

    const eventRenderNeed = new Event('render:need')
    window.dispatchEvent(eventRenderNeed)
  }
}

export { Form }
