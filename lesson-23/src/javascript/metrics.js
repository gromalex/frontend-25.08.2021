// Размеры

// offsetWidth/Height - внешняя ширина и высота (ширина контента + padding + border)
// clientWidth/Height - размер области внутри рамок (ширина контента + padding)
// scrollWidth/Height - полный размер с учётом прокрученной области (без border)
// scrollLeft/scrollTop - ширина/высота прокрученной области

const cardElement = document.querySelector('#card')
const cardItemElement = document.querySelector('#cardItem')
// console.log(cardElement.offsetWidth, cardElement.offsetHeight)
// console.log(cardElement.offsetTop, cardElement.offsetLeft)

// console.log(cardElement.clientWidth, cardElement.clientHeight)
// console.log(cardElement.clientTop, cardElement.clientLeft)

// console.log(cardItemElement.offsetWidth, cardItemElement.offsetHeight)

// console.log(cardElement.scrollWidth, cardElement.scrollHeight)
console.log(document.documentElement.scrollTop)


// Координаты

// pageXOffset/pageYOffset - смещение окна относительно документа по оси x/y (window)
// event.pageX/pageY - относительно документа
// event.clientX/clientY - относительно окна
// element.getBoundingClientRect - метод возвращает данные о координатах элемента и его размере

console.log(pageXOffset, pageYOffset)

document.addEventListener('click', (event) => {
  const { pageX, pageY } = event
  const { clientX, clientY } = event

  console.log(pageX, pageY)
  console.log(clientX, clientY)
})

const rect = cardElement.getBoundingClientRect()
console.log(rect)
