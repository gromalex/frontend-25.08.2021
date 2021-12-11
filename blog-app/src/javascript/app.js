import '../scss/app.scss'

// import { Modal } from 'bootstrap'

import { Form } from './form'
import { Posts } from './posts'

const formElement = document.querySelector('#form')
const postsElement = document.querySelector('#posts')

const form = new Form(formElement)
const posts = new Posts(postsElement)
