import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      formStatus: 'Ready for submit'
    }

    // this.handleClick = this.handleClick.bind(this) // не надо
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick = (event) => {
    // console.log('Click')
    // console.log(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('Submit')

    // this.state.isLoading = true // так нельзя
    this.setState({
      isLoading: true,
      formStatus: 'Form wait response...'
    })

    setTimeout(() => {
      this.setState({
        isLoading: false,
        formStatus: 'Submited'
      })
    }, 3000)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Form (status: {this.state.formStatus})</h2>
        <button className="button" onClick={this.handleClick}>
          {this.state.isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    )
  }
}

export { Form }
