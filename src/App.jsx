import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/green" element={<Green/>} />
        </Routes>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
    </>
  )
  }
export default App
