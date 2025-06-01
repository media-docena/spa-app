import React from 'react'
import PeliculaCard from '../components/pelicula/PeliculaCard'
import peliculas from '../data/peliculas.json'

export default function Peliculas() {
  // Creo un container para mostrar las peliculas
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Películas</h1>
      {/* Utilizo GRID para ordenar las tarjetas de a dos por fila y se controla el colapso mediante BREAKPOINTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Utilizo MAP para agregar la informacion del JSON a cada CARD */}
        {peliculas.map((pelicula, idx) => (
          // Utilizo el componente importado PELICULACARD y le asigno los datos desde el JSON
          <PeliculaCard
            key={idx}
            titulo={pelicula.titulo}
            imagenUrl={pelicula.imagen}
            // Limito la descripcion a 300 caracteres para mantener un diseño limpio
            descripcion={pelicula.descripcion.slice(0, 300)}
            año={pelicula.año}
          />
        ))}
      </div>
    </div>
  )
}
