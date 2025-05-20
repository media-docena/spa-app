
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
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Presentacion />} />
            <Route path="jose" element={<Jose />} />
            <Route path="agus" element={<Agus />} />
            <Route path="ro" element={<Ro />} />
            <Route path="musica" element={<Musica />} />
            <Route path="series" element={<Series />} />
            <Route path="bitacora" element={<Bitacora />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
