/* CSS */
import './App.css'


/* pacotes */
import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* Páginas */
import Inicio from './pages/Inicio/Inicio'
import Sobre from './pages/Sobre/Sobre'
import Propriedades from './pages/Propriedades/Propriedades'
import Servicos from './pages/Servicos/Servicos'

/* Componentes */
import NavBar from './components/Navbar/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/propriedades" element={<Propriedades/>} />
          <Route path="/servicos" element={<Servicos/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
