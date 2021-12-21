import '../scss/app.scss'

const formElement = document.querySelector('#form')

formElement.addEventListener('submit', handleSubmitForm)

function handleSubmitForm (event) {
  const isValid = formElement.checkValidity()

  if (!isValid) {
    event.preventDefault()
    formElement.classList.add('validation-enabled')
  }
}


function getPromise (delay, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

function getPromiseWithReject (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, delay)
  })
}

const promise1 = getPromise(4000, 1)
const promise2 = getPromiseWithReject(2000)
const promise3 = getPromise(1000, 3)

// Promise.all()
// Promise.all([promise1, promise2, promise3])
//   .then(([result1, result2, result3]) => {
//     console.log('Done')
//     console.log(result1, result2, result3)
//   })
//   .catch((error) => console.error(error))

// Promise.allSettled()
// Promise.allSettled([promise1, promise2, promise3])
//   .then(([result1, result2, result3]) => {
//     console.log(result1, result2, result3)
//   })

// Promise.any()
// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch(error => console.error(error))

let isLoading = true

// Promise.race()
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result)
  })
  .catch(error => console.error(error))
  .finally(() => {
    isLoading = false
  })


const arr = [1, 6, 8, 3, 90, 23, 57]

const newArr = arr.map((item) => {
  if (item > 5) {
    return item * 2
  } else {

  }
})

const filteredArr = arr.filter(item => item > 5)

const arr2 = arr
  .map(item => item * 2)
  .filter(item => item > 10)

console.log(arr2)
