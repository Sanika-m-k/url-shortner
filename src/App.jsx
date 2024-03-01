import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About'
import Redirect from './pages/Redirect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="*" element={ <Redirect />} />
        
      </Routes>
    </Router>
  )
}

export default App
