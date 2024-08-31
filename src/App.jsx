import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/DashboardComponents/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
   <div className='App'>
    <Navbar />
    <Routes>
    <Route path="/" element={<Hero />} />
    </Routes>
    <Footer />
   </div>
   
   </Router>
  )
}

export default App
