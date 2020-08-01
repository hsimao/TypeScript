import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}
class _App extends React.Component<AppProps> {
  onFetch = (): void => {
    this.props.fetchTodos()
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
        {this.rnderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
