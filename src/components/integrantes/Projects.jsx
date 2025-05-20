import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <div>
      <section class="bg-white rounded-lg">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Últimos Proyectos
          </h1>

          <p class="mt-4 text-center text-gray-500">
            Estos son algunos de los últimos proyectos en los que he estado
            trabajando. {'\u{1F680}'}
          </p>

          {/* Lista de últimos proyectos */}
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {projects && projects.map((project) => (
              <ProjectCard
                key={project.title}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
