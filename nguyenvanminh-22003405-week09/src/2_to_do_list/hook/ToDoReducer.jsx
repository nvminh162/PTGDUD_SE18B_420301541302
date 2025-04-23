export const initialState = {
    todos: [],
  };
  
  export default function TodoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
        };
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'REMOVE_TODO':
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  }