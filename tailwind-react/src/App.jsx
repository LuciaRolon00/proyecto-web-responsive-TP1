import { Routes, Route } from 'react-router-dom';

// Import de páginas y componentes
import HomePage from './pages/HomePage.jsx';
import DescJuego from './pages/DescJuego.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Contacto from './pages/Contacto.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juego/:id" element={<DescJuego />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;