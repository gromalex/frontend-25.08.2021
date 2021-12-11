class Posts {
  constructor (containerElement) {
    this.containerElement = containerElement

    this.init()
  }

  init () {
    this.render()

    this.handlePostsNeedsRender = this.handlePostsNeedsRender.bind(this)

    window.addEventListener('posts:needsRender', this.handlePostsNeedsRender)
  }

  handlePostsNeedsRender () {
    this.render()
  }

  getTemplatePost ({ title, createdAt }) {
    return `
      <div class="island__item">
        <h6>${title}</h6>
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

  getPosts () {
    return new Promise((resolve, reject) => {
      fetch('/api/posts')
        .then((response) => response.json())
        .then((data) => resolve(data.list))
        .catch((error) => reject(error))
    })
  }

  render () {
    this.getPosts()
      .then(posts => {
        const postsHTML = this.createPosts(posts)

        this.containerElement.innerHTML = postsHTML
      })
  }
}

export { Posts }
