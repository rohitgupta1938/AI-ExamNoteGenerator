import './App.css'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth'

export const serverUrl="http://localhost:8000"

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
