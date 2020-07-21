import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const baseURL = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(baseURL)

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}