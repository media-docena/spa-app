import React from 'react';
import Profile from '../../components/integrantes/Profile';
import Skills from '../../components/integrantes/Skills';
import Projects from '../../components/integrantes/Projects';
import avatar02 from '../../assets/img/avatar02.png';
import Tecnologias from '../../components/integrantes/Tecnologias';
import html from '../../assets/img/tech-logos/html.svg';
import css from '../../assets/img/tech-logos/css.svg';
import csharp from '../../assets/img/tech-logos/csharp.svg';
import Java from '../../assets/img/tech-logos/java.svg';
import mysql from '../../assets/img/tech-logos/mysql.svg'; 

function Agus() {
  return (
    <div>
      {/* Profile section */}
      <Profile
        name="Francisco Agustín Cruz Guantay"
        role="Software Developer"
        description="Soy desarrollador de software en formación. Cuento con habilidades técnicas en diversas tecnologías y con competencias blandas que me permiten trabajar en equipo y adaptarme a distintos desafíos. Me gusta crear soluciones para problemas reales y aplicar buenas prácticas en cada desarrollo."
        image={avatar02}
      />
      {/* Skills section */}
      <Skills
        subtitle={`Habilidades adquiridas durante mi formacion como desarrollador de software.`}
        skills={[
          {
            title: 'Logica de Programación',
            description:
              'Adquirir esta habilidad me permite abordar desafíos complejos de manera estructurada para encontrar e implementar soluciones efectivas en los proyectos donde participe.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            ),
          },
          {
            title: 'Programación Orientada a Objetos',
            description:
              'Aprendí y aplique en proyectos los principios fundamentales de la programación orientada a objetos, como encapsulamiento, herencia, polimorfismo y abstracción. Lo que me permitió organizar el código de manera más eficiente y reutilizable.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            ),
          },
          {
            title: 'Modelado de Sistemas',
            description:
              'Adquirí conocimiento en el modelado de sistemas utilizando diagramas UML y aplique los mismos en diferentes herramientas realizando diagramas. Esto me permitió planificar y estructurar aplicaciones antes de programarlas.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            ),
          },
          {
            title: 'Bases de Datos Relacionales',
            description:
              'Aprendi a diseñar y gestionar bases de datos relacionales como MySQL. Aplique mis conocimiento adquiridos en diferentes proyectos, siempre priorizando la integridad de la información.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            ),
          },
          {
            title: 'SCRUM y Metodologías Ágiles',
            description:
              'Participé en proyectos utilizando la metodología SCRUM, organizando el trabajo en sprints y colaborando en equipo para cumplir objetivos en tiempos definidos.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            ),
          },
          {
            title: 'Control de Versiones con Git',
            description:
              'Utilizo GIT para trabajar de forma colaborativa en proyectos junto a otros desarrolladores, gestionando el control de versiones y evitar conflictos en el código.',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            ),
          },
        ]}
      />

      {/* Projects section */}
      <Projects
        projects={[
          {
            image:
              'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80',
            title: 'Sistema de Gestión de Consultorios',
            description:
              'Se trata de un sistema informático para escritorio, cuenta con base de datos local, el mismo tiene distintas funcionalidades como el registro de personas por roles especificos, la gestión de turnos, el registro del proceso de atención médica e historia clinica, y la liquidación de honorarios para el personal médico contratado.',
            link: 'https://github.com/media-docena/seprice',
          },
          {
            image:
              'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Sistema de Gestión de Consorcios',
            description:
              'Sistema informático destinado de escritorio con inminente migracion a web, se trata de un software que automatiza las tareas de un Administrador de Consorcios de la Ciudad Autonoma de Buenos Aires. Sus funciones principales son: registro de personas con diferenciación de roles, asignacion de usuarios, registro de gastos del consorcio, la generación de balances de expensas y recibos de pago, el registro de pagos de propietarios y la visualización del estado contable para su analisis.',
            link: 'https://github.com/FACG-CODE/Sistema-de-Gestion-de-Consorcios',
          },
          {
            image:
              'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Mi Portafolio',
            description:
              'Este portafolio web fue desarrollado para mostrar mi perfil profesional, habilidades, proyectos y tecnologías que manejo. Utilice HTML, CSS y JAVASCRIPT para su desarrollo. Es un espacio en constante actualización donde reflejo mi crecimiento y aprendizaje como desarrollador.',
            link: 'https://github.com/FACG-CODE/PFO2---Portafolio',
          },
        ]}
      />
      {/* Tecnologías con las que trabajo */}
      <Tecnologias
        technologies={[
          {
            image: `${csharp}`,
            name: 'C#',
          },
          {
            image: `${Java}`,
            name: 'Java',
          },
          {
            image: `${mysql}`,
            name: 'mySQL',
          },
          {
            image: `${html}`,
            name: 'HTML',
          },
          {
            image: `${css}`,
            name: 'CSS',
          },
        ]}
      />
    </div>
  );
}

export default Agus;
