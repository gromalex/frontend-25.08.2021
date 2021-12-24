import '../scss/app.scss'

// TODOApp
import './metrics'
import { DnD } from './dnd'

const cards = []
const cardElement = document.querySelector('#card')
new DnD(cardElement)
