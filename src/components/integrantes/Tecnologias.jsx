import React from 'react';
import TechCard from './TechCard';


function Tecnologias({ technologies }) {
  return (
    <>
      <section className="bg-white rounded-lg my-4">
        <div className="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Tecnologías con las que trabajo
          </h1>
          <p class="mt-4 max-w-xs mx-auto text-center text-gray-500">
            Estas son algunas de las tecnologías con las que realizo mis
            proyectos.
          </p>

          {/* Lista de tecnologías con las que trabajo */}
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-5">
            {technologies &&
              technologies.map((tech) => (
                <TechCard key={tech.name} image={tech.image} name={tech.name} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
