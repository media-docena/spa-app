import React from "react";

export default function Bitacora() {
  return (
    <section className="bg-white rounded-lg">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Bitácora del Proyecto
        </h1>

        <div className="max-w-3xl mx-auto mt-8 space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Integrantes</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Rosana Cohen - Desarrollo</li>
              <li>Francisco Agustín Cruz Guantay - Desarrollo</li>
              <li>Josefina Cicchini - Desarrollo</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Organización del Trabajo
            </h2>
            <p className="mt-2 text-gray-600">
              Nos organizamos desde el principio con un enfoque colaborativo.
              Creamos un repositorio en GitHub donde cada integrante trabajó en
              ramas separadas, realizando pull requests para integrar avances.
            </p>
            <p className="mt-2 text-gray-600">
              Además, tuvimos una planificación inicial para dividir las
              secciones principales del proyecto y establecer los objetivos
              semanales.
            </p>
            <p className="mt-2 text-gray-600">
              Cada integrante fue responsable de sus secciones, pero también
              revisamos el código en conjunto al final del desarrollo.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Metodología Adoptada
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Reuniones virtuales breves por Discord para coordinar avances y
                dudas.
              </li>
              <li>Comunicación continua por Whatsapp para chequear avances.</li>
              <li>
                Git y GitHub con flujo simple:{" "}
                <code className="bg-gray-100 px-1 rounded text-sm">main</code>,{" "}
                <code className="bg-gray-100 px-1 rounded text-sm">dev</code>.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Reflexión Final
            </h2>
            <p className="mt-2 text-gray-600">
              El trabajo en equipo fue positivo. Logramos dividirnos las tareas
              de forma clara y mantenernos comunicados. Tuvimos desafíos con los
              tiempos y disponibilidad, pero pudimos adaptarnos gracias a la
              flexibilidad de los roles y el compromiso grupal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
