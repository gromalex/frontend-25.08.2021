import { Modal } from 'bootstrap'
import { marked } from 'marked'

class Post {
  constructor (containerElement) {
    this.containerElement = containerElement

    this.init()
  }

  init () {
    this.modalElement = document.querySelector('#formModal')
    this.instanceModal = Modal.getOrCreateInstance(this.modalElement)

    this.handlePostClick = this.handlePostClick.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
    this.handleClickEdit = this.handleClickEdit.bind(this)
    this.handlePostClear = this.handlePostClear.bind(this)

    window.addEventListener('post:click', this.handlePostClick)
    window.addEventListener('post:clear', this.handlePostClear)
    this.containerElement.addEventListener('click', this.handleClickDelete)
    this.containerElement.addEventListener('click', this.handleClickEdit)
  }

  async handlePostClick ({ detail }) {
    const { id } = detail

    const data = await this.getPost(id)

    this.render(data)
  }

  async getPost (id) {
    const url = `/api/posts/${id}`

    const response = await fetch(url)
    const post = await response.json()

    return post
  }

  getTemplatePost ({ title, lead, content, author, createdAt, id }) {
    const html = marked.parse(content)

    return `
      <h2>${title}</h2>
      <p class="lead"><strong>${lead}</strong></p>

      <div>
        ${html}
      </div>

      <div class="text-muted mb-4">
        Author: ${author}
        <br>
        Created at: ${createdAt}
      </div>

      <button type="button" class="btn btn-primary me-2" data-id="${id}" data-role="edit" >Редактировать</button>
      <button type="button" class="btn btn-danger" data-id="${id}" data-role="delete" >Удалить</button>
    `
  }

  handlePostClear () {
    this.clear()
  }

  async handleClickEdit ({ target }) {
    if (target.dataset.role === 'edit') {
      const { id } = target.dataset

      const data = await this.getPost(id)
      const event = new CustomEvent('form:setEdit', {
        detail: { data }
      })
      window.dispatchEvent(event)
    }
  }

  async handleClickDelete ({ target }) {
    if (target.dataset.role === 'delete') {
      const { id } = target.dataset

      const isRemove = confirm('Удалить пост?')

      if (!isRemove) return

      await this.removePost(id)
      this.containerElement.innerHTML = ''

      const event = new Event('posts:needsRender')
      window.dispatchEvent(event)
    }
  }

  async removePost (id) {
    const url = `/api/posts/${id}`

    const response = await fetch(url, { method: 'DELETE' })
    const post = await response.json()

    return post
  }

  render (data) {
    const postHTML = this.getTemplatePost(data)
    this.containerElement.innerHTML = postHTML
  }

  clear () {
    this.containerElement.innerHTML = ''
  }
}

export { Post }
