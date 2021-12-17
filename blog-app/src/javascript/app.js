import '../scss/app.scss'

import bootstrap from 'bootstrap'
// import { Modal } from 'bootstrap'
// import './async-await'

import { Form } from './form'
import { Posts } from './posts'
import { Post } from './post'

const formElement = document.querySelector('#form')
const postsElement = document.querySelector('#posts')
const postElement = document.querySelector('#post')

const form = new Form(formElement)
const posts = new Posts(postsElement)
const post = new Post(postElement)
