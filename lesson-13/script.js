// Ад callbacks

const urls = [
  'https://dev.by/storage/images/43/22/79/97/derived/8b227361c8aff3f918df71611dd3563b.jpg',
  'https://dev.by/storage/images/24/43/12/02/derived/707cc7c5b58a3bb60a05ce420a06d044.jpg',
  'https://dev.by/storage/images/11/29/45/06/derived/ccbdfe8e18fc39a5a392199ff073543e.jpg'
]


function loadImage (url, callback) {
  const imageElement = document.createElement('img')
  // imageElement.setAttribute('src', url)
  imageElement.src = url

  imageElement.onload = (event) => {
    const { type } = event
    console.log(event)
    callback(type)
  }

  imageElement.onerror = (event) => {
    const { type } = event
    console.log(event)
    callback(type)
  }

  document.body.append(imageElement)
}

// loadImage(urls[0], (status) => {
//   if (status == 'load') {
//     console.log('Loaded 1!')

//     loadImage(urls[1], (status) => {
//       if (status == 'load') {
//         console.log('Loaded 2!')

//         loadImage(urls[2], (status) => {
//           if (status == 'load') {
//             console.log('Loaded 3!')
//           }
//         })
//       }
//     })
//   }
// })

// Promise
// setTimeout(() => {}, 2000)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     if (false) {
//       resolve('Ok')
//     } else {
//       reject({ status: 500, errorMessage: 'Error 500'})
//     }
//   }, 3000)
// })

// promise
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.error(error.status + ': ' + error.errorMessage)
//   })

function loadImagePromise (url) {
  const promise = new Promise((resolve, reject) => {
    const imageElement = document.createElement('img')
    imageElement.src = url

    imageElement.onload = (event) => {
      const { type } = event
      resolve(type)
    }

    imageElement.onerror = (event) => {
      const { type } = event
      reject(type)
    }

    document.body.append(imageElement)
  })

  return promise
}

// loadImagePromise(urls[0])
//   .then(() => loadImagePromise(urls[1]))
//   .then(() => loadImagePromise(urls[2]))
//   .catch((error) => console.error(error))


// XMLHttpRequest через Promise

// function fetchData (url, method, callback) {
//   const xhr = new XMLHttpRequest()

//   xhr.open(method, url)

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       callback(xhr.response)
//     }
//   }

//   xhr.send()
// }

function fetchData (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.response)
      } else {
        reject(xhr.status)
      }
    }

    xhr.onerror = function () {
      reject(xhr.status)
    }

    xhr.send()
  })
}

fetchData('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    const data = JSON.parse(response)

    console.log(data)
  })
  .catch((error) => {
    console.error('Error: ' + error)
  })

fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
  .then((response) => response.json())
  .then((data) => console.log(data))
