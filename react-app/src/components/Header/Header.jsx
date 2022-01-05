import React from 'react';
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        {this.props.children}
      </header>
    )
  }
}

export { Header }
