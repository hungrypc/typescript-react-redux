import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}

const _TodoApp: FunctionComponent<AppProps> = (props: AppProps): JSX.Element => {

  const onButtonClick = (): void => {
    props.fetchTodos()
  }

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id)
  }

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
          {todo.title}
        </div>
      )
    })
  }

  return (
    <div>
      <button onClick={onButtonClick}>
        Fetch
      </button>
      {renderList()}
    </div>
  )
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  }
}

export const TodoApp =  connect(
  mapStateToProps, 
  { fetchTodos, deleteTodo }
)(_TodoApp)