import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}

// interface AppState {
//   fetching: false
// }

// custom hook to compare prevProps
const usePrevious = <T extends any>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const _TodoApp: FunctionComponent<AppProps> = (props: AppProps): JSX.Element => {

  const [fetching, setFetching] = useState(false)
  const { todos } = props
  const prevTodos = usePrevious(todos)
  
  const onButtonClick = (): void => {
    props.fetchTodos()
    setFetching(true)
  }

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id)
  }

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
          {todo.title}
        </div>
      )
    })
  }

  useEffect(() => {
    if (prevTodos !== todos) {
      console.log('hit')
      setFetching(false)
    }
  }, [todos])

  return (
    <div>
      <button onClick={onButtonClick}>
        Fetch
      </button>
      {fetching ? <div>'Loading...'</div> : null}
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