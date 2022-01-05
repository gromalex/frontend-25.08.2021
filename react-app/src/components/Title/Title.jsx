import './Title.css'

function Title (props) {
  return <h1 className="title" tabIndex="0" data-role="title">Hello {props.userName}!!!</h1>
}

export { Title }
