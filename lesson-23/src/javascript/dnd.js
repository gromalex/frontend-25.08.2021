class DnD {
  position = {
    top: 'auto',
    left: 'auto'
  }

  shifts = {
    x: 0,
    y: 0
  }

  constructor (element) {
    this.element = element

    console.log('dnd')

    this.init()
  }

  init () {
    this.handleMousedown = this.handleMousedown.bind(this)
    this.handleMousemove = this.handleMousemove.bind(this)
    this.handleMouseup = this.handleMouseup.bind(this)

    this.element.addEventListener('mousedown', this.handleMousedown)
  }

  handleMousedown ({ clientX, clientY }) {
    console.log('mousedown')
    document.addEventListener('mousemove', this.handleMousemove)
    document.addEventListener('mouseup', this.handleMouseup)

    this.calcShifts(clientX, clientY)
    this.setPosition(clientX, clientY)
  }

  handleMousemove ({ clientX, clientY }) {
    this.setPosition(clientX, clientY)
  }

  handleMouseup ({ clientX, clientY }) {
    document.removeEventListener('mousemove', this.handleMousemove)
    document.removeEventListener('mouseup', this.handleMouseup)
    console.log(clientX, clientY)
    this.setPosition(clientX, clientY)

    // TODO: Custom event dnd:end
  }

  calcShifts (x, y) {
    const { left, top } = this.element.getBoundingClientRect()

    this.shifts.x = x - left
    this.shifts.y = y - top
  }

  setPosition(left, top) {
    this.position.left = left - this.shifts.x
    this.position.top = top - this.shifts.y

    this.element.style.left = this.position.left + 'px'
    this.element.style.top = this.position.top + 'px'
  }
}

export { DnD }
