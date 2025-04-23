import React, { useContext } from 'react'

import { TodoContext } from '../hook/ToDoContext'

import TodoUI from '../ToDoUI'

export default function ToDoReducerUI() {
  const {state, dispatch} = useContext(TodoContext)

  return (
    <TodoUI
    todos={state.todos}
    addTodo={(text) => dispatch({ type: "ADD_TODO", payload: text })}
    toggleTodo={(id) => dispatch({ type: "TOGGLE_TODO", payload: id })}
    removeTodo={(id) => dispatch({ type: "REMOVE_TODO", payload: id })}
  />
  )
}
