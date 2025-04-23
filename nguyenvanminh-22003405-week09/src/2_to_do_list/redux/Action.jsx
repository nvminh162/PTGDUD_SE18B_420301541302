export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: text,
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id,
  });
  
  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id,
  });