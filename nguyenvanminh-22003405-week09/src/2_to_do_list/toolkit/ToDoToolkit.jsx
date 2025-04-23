import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoUI from '../ToDoUI';
import { addTodo, toggleTodo, removeTodo } from './ToDoSlice';

export default function TodoToolkit() {
  const todos = useSelector((state) => state.toDoToolkit.todos);
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