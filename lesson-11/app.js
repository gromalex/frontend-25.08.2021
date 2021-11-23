const key = '1354067d4c5e5ba7d6625f68d153937b'
const urlWetherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`
const urlWetherByDays = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`

const widgetContainerElement = document.querySelector('#widget')

class Widget {
  constructor (containerElement, data) {
    this.containerElement = containerElement
    this.data = data

    this.render()
  }

  get template () {}

  render () {
    this.containerElement.insertAdjacentHTML('beforeend', this.template)
  }
}

class WidgetHeader extends Widget {
  // constructor (containerElement, data, test) {
  //   super(containerElement, data)
  //   this.test = test
  // }

  get template () {
    const resultTemp = Math.round(this.data.temp) > 0 ? '+' + Math.round(this.data.temp) : Math.round(this.data.temp)

    return `
      <div class="widget-header">
        <div class="d-flex flex-column">
          <div class="mb-auto">
            ${this.data.city}, ${this.data.countryCode}
            <br>
            ${this.data.date.getHours()}:${this.data.date.getMinutes()}
          </div>

          <div class="py-5 text-center">
            <img src="${this.data.iconSrc}" alt="">
            <br>
            <strong class="description">${this.data.description}</strong>
            <h2 class="mt-2">${resultTemp} C</h2>
          </div>

          <div class="d-flex">
            <span class="me-auto">${this.data.windDeg}</span>
            <span class="">${this.data.windSpeed} m/s</span>
          </div>
        </div>
      </div>
    `
  }
}

fetch(urlWetherCurrent)
  .then((response) => response.json())
  .then((data) => {
    const city = data.name
    const windDeg = data.wind.deg
    const windSpeed = data.wind.speed
    const date = new Date(data.dt * 1000)
    const temp = data.main.temp - 273.15
    const countryCode = data.sys.country
    const description = data.weather[0].description
    const iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    new WidgetHeader(
      widgetContainerElement,
      { city, countryCode, date, temp, windDeg, windSpeed, description, iconSrc }
    )
  })

class WidgetBody extends Widget {
  get template () {
    const items = this.data.map((item) => {
      const [date, iconId, temp] = [new Date(item.dt), item.weather[0].icon, item.main.temp]
      const iconSrc = `http://openweathermap.org/img/wn/${iconId}@2x.png`

      return this.itemTemplate({ date, iconSrc, temp })
    })

    return `
      <div class="widget-body">
        ${items.join(' ')}
      </div>
    `
  }

  itemTemplate ({ date, iconSrc, temp }) {
    return `
      <div class="widget-body__item">
        <span>${date}</span>
        <img src="${iconSrc}" alt="">
        <span>${temp}</span>
      </div>
    `
  }
}

fetch(urlWetherByDays)
  .then(response => response.json())
  .then(data => {
    const resultData = data.list.filter((item, index) => index % 8 == 0)

    new WidgetBody(widgetContainerElement, resultData)
  })
