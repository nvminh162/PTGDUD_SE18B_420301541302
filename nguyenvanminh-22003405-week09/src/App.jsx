import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import CounterAppRouter from './1_counter_app/CounterRouter'
import ToDoRouter from './2_to_do_list/ToDoRouter'
import ToggleThemeRouter from './3_toggle_theme/ToggleThemeRouter'
import CartRouter from './4_shopping_cart/CartRouter'
import LoginRouter from './5_login/LoginRouter'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 backdrop-blur-sm bg-opacity-95">
            <Routes>
              <Route path="/" element={<Navigate to="/counter_app" />} />
              <Route path="/counter_app/*" element={<CounterAppRouter />} />
              <Route path="/to_do_list/*" element={<ToDoRouter />} />
              <Route path="/toggle_theme/*" element={<ToggleThemeRouter />} />
              <Route path="/shopping_cart/*" element={<CartRouter />} />
              <Route path="/login/*" element={<LoginRouter />} />
            </Routes>
          </div>
        </div>
      </main>
      
      <footer className="mt-auto py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nguyễn Văn Minh - 22003405</p>
      </footer>
    </div>
  )
}

export default App
