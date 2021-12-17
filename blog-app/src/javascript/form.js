import { nanoid } from 'nanoid'
import { Modal } from 'bootstrap'
import { resetForm } from './helpers'

class Form {
  constructor (formElement) {
    this.formElement = formElement

    this.init()
  }

  init () {
    this.modalElement = document.querySelector('#formModal')
    this.buttonCreatePostElement = document.querySelector('#buttonCreatePost')
    this.instanceModal = Modal.getOrCreateInstance(this.modalElement)

    this.handleSubmitForm = this.handleSubmitForm.bind(this)
    this.handleClickButtonCreate = this.handleClickButtonCreate.bind(this)
    this.handleFormSetEdit = this.handleFormSetEdit.bind(this)

    this.formElement.addEventListener('submit', this.handleSubmitForm)
    this.buttonCreatePostElement.addEventListener('click', this.handleClickButtonCreate)
    window.addEventListener('form:setEdit', this.handleFormSetEdit)
  }

  handleClickButtonCreate () {
    resetForm(this.formElement)
    this.setFormCreatePost()
    this.instanceModal.show()
  }

  async handleSubmitForm (event) {
    event.preventDefault()

    const post = {}

    const formData = new FormData(this.formElement)

    for (const [name, value] of formData.entries()) {
      post[name] = value
    }

    if (!post.id) post.id = nanoid()
    if (!post.createdAt) post.createdAt = new Date()

    await this.sendPost(post)
    resetForm(this.formElement)
    this.instanceModal.hide()

    const customEvent = new Event('post:clear')
    window.dispatchEvent(customEvent)
  }

  handleFormSetEdit ({ detail }) {
    const { data } = detail
    this.setFormEditPost()
    this.instanceModal.show()

    for (const prop in data) {
      const fieldElement = document.querySelector(`#${prop}`)

      if (fieldElement) {
        fieldElement.value = data[prop]
      }
    }
  }

  setFormCreatePost () {
    this.formElement.method = 'POST'
  }

  setFormEditPost () {
    this.formElement.method = 'PUT'
  }

  async sendPost (data) {
    const dataJson = JSON.stringify(data)
    const method = this.formElement.getAttribute('method')
    let url = '/api/posts'

    if (method === 'PUT') {
      url += `/${data.id}`
    }

    console.log(method)
    console.log(url)

    const opts = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataJson
    }

    // fetch('/api/posts', opts)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const event = new Event('posts:needsRender')
    //     window.dispatchEvent(event)
    //   })

    await fetch(url, opts)

    const event = new Event('posts:needsRender')
    window.dispatchEvent(event)
  }
}

export { Form }
