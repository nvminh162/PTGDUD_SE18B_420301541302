import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Projects from './pages/Projects'
import Teams from './pages/Teams'
import Analytics from './pages/Analytics'
import Messages from './pages/Messages'
import Integrations from './pages/Integrations'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/integrations" element={<Integrations />} />
    </Routes>
  )
}

export default App