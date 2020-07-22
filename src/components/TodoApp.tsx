import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

const _TodoApp: FunctionComponent<AppProps> = (props: AppProps): JSX.Element => {

  const onButtonClick = (): void => {
    props.fetchTodos()
  }

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>
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
  { fetchTodos }
)(_TodoApp)