import { Component } from 'react';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { Header } from '../Header/Header';
import { Form } from '../Form/Form';

const data = [
  { id: 1242346, content: 'Linst item 1' },
  { id: 4536776, content: 'Linst item 2' },
  { id: 6567563, content: 'Linst item 3' },
  { id: 2345634, content: 'Linst item 4' }
]

function List (props) {
  return <ul>{data.map((data) => <ListItem key={data.id}>{data.content}</ListItem>)}</ul>
}

// [
//   <ListItem key={1242346}>Linst item 1</ListItem>,
//   <ListItem key={4536776}>Linst item 2</ListItem>,
//   <ListItem key={6567563}>Linst item 3</ListItem>,
//   // ...
// ]

function ListItem (props) {
  return <li>{props.children}</li>
}

class App extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Title userName="Alexey" />
          <Form />
          <List />
        </Header>
      </Container>
    )
  }
}

export { App }
