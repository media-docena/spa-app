import { useState } from 'react';
import Layout from './pages/Layout';
import Presentacion from './pages/Presentacion';
import Jose from './pages/integrantes/Jose';
import Agus from './pages/integrantes/Agus';
import Ro from './pages/integrantes/Ro';
import Musica from './pages/Musica';
import Series from './pages/Series';
import Error from './pages/Error';
import Bitacora from './pages/Bitacora';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';

export default function App() {
  // Estados de la sección música. Se movieron a App.jsx para manejar el estado global 
  // y no tener volver a llamar a la API en cada renderizado de Musica.jsx) 
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Presentacion />} />
            <Route path="jose" element={<Jose />} />
            <Route path="agus" element={<Agus />} />
            <Route path="ro" element={<Ro />} />
            <Route path="musica" element={<Musica songs={songs} setSongs={setSongs} loading={loading} setLoading={setLoading} />} />
            <Route path="series" element={<Series />} />
            <Route path="bitacora" element={<Bitacora />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
