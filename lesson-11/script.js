// ДЗ
function fetchData (url, method, callback) {
  const xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = function () {
    if (xhr.status == 200) {
      callback(xhr.response)
    } else {
      console.error(xhr.statusText + ': ' + xhr.status)
    }
  }

  xhr.onerror = function () {
    console.log(xhr.statusText + ': ' + xhr.status)
  }

  xhr.send()
}

const key = '1354067d4c5e5ba7d6625f68d153937b'
const urlWetherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`
const urlWetherByDays = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`

const widgetContainerElement = document.querySelector('#widget')

// Header
function widgetHeaderTemplate (weatherData) {
  const { city, countryCode, date, temp, windDeg, windSpeed, description, iconSrc } = weatherData
  const resultTemp = Math.round(temp) > 0 ? '+' + Math.round(temp) : Math.round(temp)

  return `
    <div class="widget-header">
      <div class="d-flex flex-column">
        <div class="mb-auto">
          ${city}, ${countryCode}
          <br>
          ${date.getHours()}:${date.getMinutes()}
        </div>

        <div class="py-5 text-center">
          <img src="${iconSrc}" alt="">
          <br>
          <strong class="description">${description}</strong>
          <h2 class="mt-2">${resultTemp} C</h2>
        </div>

        <div class="d-flex">
          <span class="me-auto">${windDeg}</span>
          <span class="">${windSpeed} m/s</span>
        </div>
      </div>
    </div>
  `
}

function renderHeader (data) {
  widgetContainerElement.innerHTML = widgetHeaderTemplate(data)
}

// Запрос за данными для widget-header
fetchData(urlWetherCurrent, 'GET', (response) => {
  const data = JSON.parse(response)

  const city = data.name
  const windDeg = data.wind.deg
  const windSpeed = data.wind.speed
  const date = new Date(data.dt * 1000)
  const temp = data.main.temp - 273.15
  const countryCode = data.sys.country
  const description = data.weather[0].description
  const iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  renderHeader({ city, countryCode, date, temp, windDeg, windSpeed, description, iconSrc })
})

// Часть 2
// Погода по дням, всего 40 объектов, вам надо взять каждый 8-й, т.е [8, 16, 24, 32, 40]

function widgetItemTemplate (weatherData) {
  const { date, iconSrc, temp } = weatherData

  return `
    TODO: тут должен быть html item
  `
}

function widgetBodyTemplate (days) {
  // сюда передаем массив объектов (days), где каждый объект это погода
  // перебираем days в цикле и получаем суммарный html всех items (уже делали в прошлом дз)

  // возвращаем html
  return `
    <div class="widget-body">
      TODO: тут все ваше items
    </div>
  `
}

function renderBody (data) {
  widgetContainerElement.innerHTML += widgetBodyTemplate(data) // именно +=
}

// Запрос за данными для widget-body
fetchData(urlWetherByDays, 'GET', (response) => {
  // TODO: тут уже сами
})
