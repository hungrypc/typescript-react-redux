# Notes

## Overview
Pros and cons of ts with react/redux.

**PROS**:
- Eliminates entire classes of very easy to make mistakes
- Gives devs a much better idea of information that's flowing around the app
- Much easier to refactor just about everything

**CONS**:
- Not the best type definition files (especially around redux)
- Tons of generics flying around
- Tons of imports, as just about everything (action creator, action, reducer, store, component) need to be aware of different types
- Redux inherently functional in nature, tough integration with TS classes

## Connecting a Component to Redux
We want to avoid `export default` with typescript and use named exports instead because it works well with code refactoring. 

## Roundup
- Any time we create a component, we will also define an interface that defines the props we expect the component to receive
- Because we are using react/redux/thunk, they don't all always behave nicely together when it comes to type definitions
- In our types file, we  listed out all the different types of actions as an enum
  - We also exported a type union between all the different action types we expect to have (actual action object itself)
- In our `todosReducer`, we imported `Action` and used it to annotate the action argument
  - In order to figure out what type of action it is, we used a type guard in the form of a `switch` statement, where each case narrows down the possible type that action is to either `ActionTypes.fetchTodos` or `ActionTypes.deleteTodo`
  - Because of this, inside of each of these cases, we have 100% certainty about all the different properties of that action object
