class Post {
  constructor (containerElement) {
    this.containerElement = containerElement

    this.init()
  }

  init () {
    this.handlePostClick = this.handlePostClick.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)

    window.addEventListener('post:click', this.handlePostClick)
    this.containerElement.addEventListener('click', this.handleClickDelete)
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
    return `
      <h2>${title}</h2>
      <p class="lead"><strong>${lead}</strong></p>

      <p class="mb-4">${content}</p>

      <div class="text-muted">
        Author: ${author}
        <br>
        Created at: ${createdAt}
      </div>

      <button type="button" class="btn btn-danger" data-id="${id}" data-role="delete" >Удалить</button>
    `
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
}

export { Post }
