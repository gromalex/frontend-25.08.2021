class Posts {
  constructor (containerElement) {
    this.containerElement = containerElement
    this.currentPost = null

    this.init()
  }

  init () {
    this.render()

    this.handlePostsNeedsRender = this.handlePostsNeedsRender.bind(this)
    this.handleClickPost = this.handleClickPost.bind(this)

    window.addEventListener('posts:needsRender', this.handlePostsNeedsRender)
    this.containerElement.addEventListener('click', this.handleClickPost)
  }

  handlePostsNeedsRender () {
    this.render()
  }

  handleClickPost (event) {
    event.preventDefault()

    const { target } = event

    if (target.tagName === 'A') {
      this.activatePost(target)

      const event = new CustomEvent('post:click', {
        detail: { id: target.id }
      })
      window.dispatchEvent(event)
    }
  }

  activatePost (element) {
    if (this.currentPost) {
      this.currentPost.classList.remove('active')
    }

    element.classList.add('active')

    this.currentPost = element
  }

  getTemplatePost ({ title, createdAt, id }) {
    return `
      <div class="island__item">
        <h6><a href="#${id}" id="${id}" class="stretched-link">${title}</a></h6>
        <div class="text-mited"><time>${createdAt}</time></div>
      </div>
    `
  }

  createPosts (posts) {
    const result = posts.map((post) => {
      return this.getTemplatePost(post)
    })

    return result.join(' ')
  }

  async getPosts () {
    // return new Promise((resolve, reject) => {
    //   fetch('/api/posts')
    //     .then((response) => response.json())
    //     .then((data) => resolve(data.list))
    //     .catch((error) => reject(error))
    // })
    const response = await fetch('/api/posts')
    const data = await response.json()

    console.log(data.list)

    return data.list
  }

  async render () {
    // this.getPosts()
    //   .then(posts => {
    //     const postsHTML = this.createPosts(posts)

    //     this.containerElement.innerHTML = postsHTML
    //   })

    const posts = await this.getPosts()

    const postsHTML = this.createPosts(posts)
    this.containerElement.innerHTML = postsHTML
  }
}

export { Posts }
