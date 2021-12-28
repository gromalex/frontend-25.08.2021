import { DnD } from './dnd';

class Card {
  data = {
    id: new Date().getTime(),
    content: 'Hello!',
    position: {
      top: 'auto',
      left: 'auto'
    }
  }

  constructor (containerElement) {
    this.cardElement = null
    this.containerElement = containerElement

    this.init()
  }

  init () {
    this.handleDblClick = this.handleDblClick.bind(this)

    this.render()
  }

  handleDblClick ({currentTarget}) {
    currentTarget.classList.add('stick_edit')
  }

  // handleClickSaveEdit () {}

  getTemplate () {
    return `
      <div class="stick__content">${this.data.content}</div>

      <form class="stick__form">
        <textarea name="content">${this.data.content}</textarea>
        <button>Save</button>
      </form>
    `
  }

  render () {
    this.cardElement = document.createElement('div')
    this.cardElement.classList.add('stick')
    // cardElement.setAttribute('id', '') // TODO:

    this.cardElement.addEventListener('dblclick', this.handleDblClick)
    new DnD(this.cardElement)

    const template = this.getTemplate()
    this.cardElement.innerHTML = template

    this.containerElement.append(this.cardElement)
  }
}

export { Card }
