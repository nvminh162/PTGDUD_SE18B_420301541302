import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoUI from '../ToDoUI';
import { addTodo, toggleTodo, removeTodo } from './Action';

export default function TodoRedux() {
  const todos = useSelector((state) => state.toDoRedux.todos);
  const dispatch = useDispatch();

  return (
    <TodoUI
      todos={todos}
      addTodo={(text) => dispatch(addTodo(text))}
      toggleTodo={(id) => dispatch(toggleTodo(id))}
      removeTodo={(id) => dispatch(removeTodo(id))}
    />
  );
}