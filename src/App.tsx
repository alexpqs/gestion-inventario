import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InicioSesion from './paginas/InicioSesion';
import Dashboard from './paginas/Dashboard';
import Empresas from './paginas/Empresas';
import Usuarios from './paginas/Usuarios';
import Productos from './paginas/Productos';
import Inventarios from './paginas/Inventarios';
import Movimientos from './paginas/Movimientos';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el inicio de sesión */}
        <Route path="/" element={<InicioSesion />} />

        {/* Ruta para el dashboard principal */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rutas para las diferentes secciones del sistema */}
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/inventarios" element={<Inventarios />} />
        <Route path="/movimientos" element={<Movimientos />} />
      </Routes>
    </Router>
  );
}

export default App;