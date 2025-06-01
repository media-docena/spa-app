import React from "react";

// Funcion que retorna una tarjeta horizontal para mostrar series. Recibe los datos de las series.
function PeliculaCard({titulo, imagenUrl, descripcion, año}) {
    return (
        // Contenedor principal de la tarjeta
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden my-4">
            {/* Imagen de la serie, se mostrara a la izquierda */}
            <img 
            className="w-56 h-80 object-cover"
            src={imagenUrl || 'https://via.placeholder.com/160x240'} 
            alt={titulo} 
            />
            {/* Contenedor para la informacion restante, se mostrara a la derecha  */}
            <div className="flex-1 flex flex-col p-4 justify-center p-4">
                {/* Informacion de la serie */}
                <h2 className="text-xl font-bold">{titulo}</h2>
                <p className="text-gray-600 text-sm mb-2">{año}</p>
                <p className="text-gray-700">{descripcion}</p>
            </div>   
        </div>
    );
}

export default PeliculaCard;