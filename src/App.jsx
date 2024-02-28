import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <br/>
        <Link to="/blue">Blue</Link>
        <br/>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
        </Routes>
      </div>
    </div>
    </>
  )
  }
export default App
