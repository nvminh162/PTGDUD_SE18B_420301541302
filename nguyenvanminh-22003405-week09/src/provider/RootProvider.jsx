import React from 'react'
import { Provider } from 'react-redux'

import store from "../store/Store"

import { CounterProvider } from "../1_counter_app/hook/HookCounterContext"
import { TodoProvider } from '../2_to_do_list/hook/ToDoContext'
import { ThemeProvider } from '../3_toggle_theme/hook/ThemeContext'
import { CartProvider } from '../4_shopping_cart/hook/CartContext'
import { AuthProvider } from '../5_login/hook/AuthContext'


export default function RootProvider({children}) {
    return (
        <Provider store={store}>
            <CounterProvider>
                <TodoProvider>
                    <ThemeProvider>
                        <CartProvider>
                            <AuthProvider>
                                {children}
                            </AuthProvider>
                        </CartProvider>
                    </ThemeProvider>
                </TodoProvider>
            </CounterProvider>
        </Provider>
    )
}
