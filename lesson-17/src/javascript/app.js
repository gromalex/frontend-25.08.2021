/*eslint-disable */
import '../scss/app.scss'

import { Storage } from './storage'
import { Form } from './form'
import { List } from './list'

const formCreateElement = document.querySelector('#formCreate')
const listElement = document.querySelector('#list')

const storage = new Storage()
const data = storage.data
new Form(data, formCreateElement);
new List(data, listElement)


// ----------------------------------------------------

// import { array as collection, array2 } from './array'
// import showLog from './test'

// console.warn(collection, array2)
// showLog()
