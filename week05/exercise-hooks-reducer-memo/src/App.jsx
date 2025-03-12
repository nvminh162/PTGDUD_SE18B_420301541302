import { useReducer } from "react";

// Initial state
const initialState = {
  inputOne: 0,
  inputTwo: 0,
  result: 0,
  operation: 'add' //default operation
};

const SET_INPUT = 'set-input';
const SET_OPERATION = 'set-operation';
const ADD_ACTION = 'add';
const SUB_ACTION = 'sub';
const MUL_ACTION = 'mul';
const DIV_ACTION = 'div';

const setInput = (name, value) => ({
  type: SET_INPUT,
  payload: { name, value }
});

const setOperation = (operation) => ({
  type: SET_OPERATION,
  payload: operation
});

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case SET_OPERATION:
      return {
        ...state,
        operation: action.payload
      };
    case ADD_ACTION:
      return { ...state, result: state.inputOne + state.inputTwo };
    case SUB_ACTION:
      return { ...state, result: state.inputOne - state.inputTwo };
    case MUL_ACTION:
      return { ...state, result: state.inputOne * state.inputTwo };
    case DIV_ACTION:
      return {
        ...state,
        result: state.inputTwo !== 0 ? state.inputOne / state.inputTwo : 'Cannot divide by zero'
      };
    default:
      throw new Error('Invalid action');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInput(name, parseFloat(value) || 0)); // Parse input value to number
  };

  const handleOperationChange = (e) => {
    dispatch(setOperation(e.target.value));
  };

  const handleCalculate = () => {
    switch (state.operation) {
      case ADD_ACTION:
        dispatch({ type: ADD_ACTION });
        break;
      case SUB_ACTION:
        dispatch({ type: SUB_ACTION });
        break;
      case MUL_ACTION:
        dispatch({ type: MUL_ACTION });
        break;
      case DIV_ACTION:
        dispatch({ type: DIV_ACTION });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-col gap-5 w-screen h-screen flex justify-center items-center">
      <h1 className="font-bold">App tính dùng hooks Reducer: + - * /</h1>
      <div className="flex flex-col gap-5">
        <input
          onChange={handleInputChange}
          className="outline-1 outline-gray-300"
          type="number"
          name="inputOne"
          id="inputOne"
          value={state.inputOne}
        />
        <select
          onChange={handleOperationChange}
          value={state.operation}
          className="outline-1 outline-gray-300"
        >
          <option value={ADD_ACTION}>Cộng</option>
          <option value={SUB_ACTION}>Trừ</option>
          <option value={MUL_ACTION}>Nhân</option>
          <option value={DIV_ACTION}>Chia</option>
        </select>
        <input
          onChange={handleInputChange}
          className="outline-1 outline-gray-300"
          type="number"
          name="inputTwo"
          id="inputTwo"
          value={state.inputTwo}
        />
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white px-3 py-1 rounded transition duration-300 ease-in-out hover:bg-blue-600"
        >
          Tính
        </button>
        <input
          placeholder="Result"
          className="outline-1 outline-gray-300"
          type="number"
          name="result"
          id="result"
          value={state.result}
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
