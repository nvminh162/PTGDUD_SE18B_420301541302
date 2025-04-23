import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import RootProvider from './provider/RootProvider.jsx'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <RootProvider>
            <App />
        </RootProvider>
      </Router>
  </StrictMode>,
)
