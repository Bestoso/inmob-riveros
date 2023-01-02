import { Banner } from "./components/Banner"
import { NavBar } from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import { PropsPage } from "./components/PropsPage"
import { Operation } from "./components/Operation"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedades" element={<PropsPage />} />
            <Route path="/propiedades/:operation" element={<Operation />} />
            <Route path='/servicios' element={<Services />} />
            <Route path='/contacto' element={<Contact />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
