// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/DashboardComponents/Hero";
import { Transaction } from "./pages/Transaction";

function App() {
  return (
    <Router>
      <div className="App flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/transactions" element={<Transaction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
