import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// import App from './App'
import { TodoApp } from './components/TodoApp'
import { reducers } from './reducers'

const store = createStore(
  reducers, 
  applyMiddleware(thunk)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App color="red" /> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

