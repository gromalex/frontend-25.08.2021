function getPromise (value, delay = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

async function foo () {
  const result = await getPromise('Hello from promise', 3000)
  console.log(result)

  return result
}

foo()

// console.log(foo())

// foo().then((result) => console.log(result))

// setTimeout(() => {
//   console.log(5)
// }, 2000)

// const promise = new Promise(resolve => {
//   setTimeout(() => {
//     console.log(5)
//     resolve(5)
//   }, 2000)
// })

// promise.then(result => console.log(result))

// console.log('After promise')
