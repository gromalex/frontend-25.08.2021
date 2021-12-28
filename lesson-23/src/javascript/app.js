import '../scss/app.scss'

// TODOApp
// import './metrics'
// import { DnD } from './dnd'
import { Card } from './card'

// const cards = []
// const cardElement = document.querySelector('#card')
// new DnD(cardElement)

const containerElement = document.querySelector('#container')
const createStickButtonElement = document.querySelector('#createStickButton')

createStickButtonElement.addEventListener('click', () => {
  new Card(containerElement)
})
