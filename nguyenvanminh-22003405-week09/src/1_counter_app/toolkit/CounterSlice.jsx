import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state
const initialState = {
  a: '',
  b: '',
  result: ''
};

// Tạo slice (state + reducers + actions)
export const counterSlice = createSlice({
  name: 'counterToolkit', // Tên slice
  initialState, // State ban đầu
  reducers: {
    setA: (state, action) => {
      state.a = action.payload; // Cập nhật giá trị A
    },
    setB: (state, action) => {
      state.b = action.payload; // Cập nhật giá trị B
    },
    increase: (state) => {
      state.result = state.a + state.b; // Tính tổng A + B
    },
    decrease: (state) => {
      state.result = state.a - state.b; // Tính hiệu A - B
    }
  }
});

// Tự động export các actions (setA, setB, increase, decrease)
export const { setA, setB, increase, decrease } = counterSlice.actions;

// Tự động export reducer
export default counterSlice.reducer;
