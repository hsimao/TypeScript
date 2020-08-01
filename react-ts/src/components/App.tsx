import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}

interface AppState {
  fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = { fetching: false }
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }

  onFetch = (): void => {
    this.props.fetchTodos()
    this.setState({ fetching: true })
  }

  onDeleteTodo = (id: number): void => {
    this.props.deleteTodo(id)
  }

  rnderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onDeleteTodo(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onFetch}>Fetch todos</button>
        <hr />
        {this.state.fetching ? 'Loading' : null}
        {this.rnderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
