// Протокол запроса для Веб ---------------------------------------------------
// http - протокол передачи гипертекста (HTTP) является базовым сетевым protocol, который позволяет передавать гипермедиа документы в Web
// http://google.com - используя данную запись в url строке браузера, мы говорим: запросить документ используя протокол http.
// https - защищённая версия протокола http
// https://kunegin.com/ref3/wap/images/ris2.jpg

// JSON (JavaScript Object Notation) ----------------------------------------------
// Метод JSON.parse(response) - из json в объект javascript
// Метод JSON.stringify(data) - из объекта javascript в json

// Rest API
//   - API - программный интерфейс для общения программ
//   - REST - это интерфейс общения через HTTP протокол

// CRUD: C - create, R - read, U - update, D - delete;

// AJAX (Async JavaScript and XML) XMLHttpRequest — это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы -------------------------------------------------------------

// Методы запроса
// POST - create / update
// GET - read
// PUT/PATCH - update
// DELETE - delete

// Статусы запросов
// 1хх - информационный
// 2хх - успешное выполнение
// 3хх - перенаправление
// 4хх - ошибка на клиенте
// 5хх - ошибка на сервере

function fetchData (url, method, callback) {
  const xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = function () {
    if (xhr.status == 200) {
      callback(xhr.response)
    }
  }

  xhr.send()
}

const containerElement = document.querySelector('#container')

containerElement.addEventListener('click', (event) => {
  event.preventDefault()

  const { target } = event

  // Способ через closest, сработает при клике на всю карточку
  // const linkElement = target.closest('a')

  // if (linkElement) {
  //  TODO:
  // }

  // Способ через кнопку, сработает только при клике на кнопку внутри карточки
  if (target.tagName == 'BUTTON') {
    const { id } = target.dataset
    console.log(target.dataset.id)

    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`

    fetchData(url, 'GET', (response) => {
      console.log(response)
      // TODO:
    })
  }
})


fetchData('https://jsonplaceholder.typicode.com/posts', 'GET', (response) => {
  const data = JSON.parse(response)

  const cards = data.map((item) => {
    return cardTemplate(item.title, item.body, item.id)
  })

  const result = cards.join('\n')

  containerElement.innerHTML = result
})

function cardTemplate (title, text, id) {
  return `
    <a href="#" role="button" class="card" style="width: 25%" data-id="${id}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text mb-4">${text}</p>
        <button class="btn btn-primary" type="button" data-id="${id}">Comments</button>
      </div>
    </a>
  `
}
