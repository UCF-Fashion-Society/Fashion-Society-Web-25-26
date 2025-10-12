import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Shows from './pages/Shows'
import About from './pages/About'
import Committees from './pages/Committees'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <div className = "pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App

