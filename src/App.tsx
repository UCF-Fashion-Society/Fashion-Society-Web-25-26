import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Shows from './pages/Shows'
import About from './pages/About'
import Committees from './pages/Committees'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Layout from './Layout'
import Calendar from './pages/Calendar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/events" element={<Events />} />
            <Route path="/shows" element={<Shows />} />
            <Route path ="/calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

