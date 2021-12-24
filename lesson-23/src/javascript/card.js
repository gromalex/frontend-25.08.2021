import { DnD } from './dnd';

class Card {
  constructor (cards) {
    this.cards = cards
  }

  getTemplate ({ id, content, position }) {
    // TODO: template
    return `
      <div class="card__content></div>

      <form>
        <textarea name="content"></textarea>
        <button>Save</button>
      </form>
    `
  }

  render () {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    cardElement.setAttribute('id', '') // TODO:

    new DnD(cardElement)

    const template = this.getTemplate()
    cardElement.innerHTML = template

    // body.append(cardElement)
  }
}
