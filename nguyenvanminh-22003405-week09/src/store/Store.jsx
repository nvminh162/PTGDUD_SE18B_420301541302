// store.js
import { configureStore } from '@reduxjs/toolkit';

import counterRedux from '../1_counter_app/hook/HookCounterReducer';
import counterToolkit  from '../1_counter_app/toolkit/CounterSlice';

import ToDoRedux from '../2_to_do_list/hook/ToDoReducer';
import ToDoToolkit from '../2_to_do_list/toolkit/ToDoSlice';

import  ThemeReducer from '../3_toggle_theme/hook/ThemeReducer';
import ThemeToolkit from '../3_toggle_theme/toolkit/ThemeSlice';

import CartRedux from '../4_shopping_cart/hook/CartReducer';
import CartToolkit from '../4_shopping_cart/toolkit/CartSlice';

import AuthReducer from '../5_login/hook/AuthReducer';
import AuthToolkit from '../5_login/toolkit/AuthSlice';


const store = configureStore({
  reducer: {
    counterReducer: counterRedux,  // Thực hiện với reducer thông thường
    counterToolkit: counterToolkit, // Thực hiện với reducer toolkit
    toDoRedux: ToDoRedux,
    toDoToolkit: ToDoToolkit, // Thực hiện với reducer toolkit
    themeRedux: ThemeReducer,
    themeToolkit: ThemeToolkit, // Thực hiện với reducer toolkit
    cartRedux: CartRedux,
    cartToolkit: CartToolkit,
    authRedux: AuthReducer,
    authToolkit: AuthToolkit,
  },
});

export default store;
