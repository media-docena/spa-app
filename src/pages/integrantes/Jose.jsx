import React from 'react';
import Profile from '../../components/integrantes/Profile';
import Skills from '../../components/integrantes/Skills';
import Projects from '../../components/integrantes/Projects';
import avatar01 from '../../assets/img/avatar01.png';
import Tecnologias from '../../components/integrantes/Tecnologias';
import react from '../../assets/img/tech-logos/react.svg';
import node from '../../assets/img/tech-logos/nodejs.svg';
import csharp from '../../assets/img/tech-logos/csharp.svg';
import git from '../../assets/img/tech-logos/git.svg';
import mysql from '../../assets/img/tech-logos/mysql.svg';
import pawsome from '../../assets/img/perfil-jose/proj-pawsome.jpeg';
import gestionClinica from '../../assets/img/perfil-jose/proj-gestionclinica.jpg';
import clubDeportivo from '../../assets/img/perfil-jose/proj-clubdeportivo.jpg';

export default function Jose() {
  return (
    <div>
      {/* Profile section */}
      <Profile
        name="Josefina Cicchini"
        role="software developer"
        description="Soy desarrolladora frontend en formación, con interés en la accesibilidad, la experiencia de usuario y el diseño web simple y estético. Disfruto construir interfaces claras, funcionales y centradas en el usuario. Me impulsa seguir aprendiendo y encontrar nuevas formas de mejorar cada detalle."
        image={avatar01}
      />
      {/* Skills section */}
      <Skills
        subtitle={`Habilidades y herramientas adquiridas a lo largo de mi formación`}
        skills={[
          {
            title: 'Desarrollo Frontend',
            description:
              'Construyo interfaces claras, responsivas y funcionales con HTML, CSS y JavaScript. Me enfoco en la experiencia del usuario y el diseño accesible.',
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
            title: 'React',
            description:
              'Desarrollo SPAs con React creando componentes reutilizables, manejando estado y navegación con herramientas como React Router.',
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
            title: 'Diseño Web',
            description:
              'Me interesa lograr una identidad visual coherente. Cuido la armonía en colores, tipografía y espaciado para construir sitios simples pero estéticos.',
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
            title: 'Versionado con Git',
            description:
              'Trabajo con Git y GitHub para organizar mis proyectos. Uso ramas, commits descriptivos y despliegue en GitHub Pages para compartir resultados.',
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
            title: 'Herramientas prácticas',
            description:
              'Manejo herramientas como Figma, Canva, CapCut y Notion para diseñar, organizar y comunicar ideas de forma eficiente y visual.',
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
            title: 'Aprendizaje continuo',
            description:
              'Me entusiasma seguir aprendiendo. Investigo nuevas formas de mejorar cada proyecto y disfruto incorporar buenas prácticas al proceso de desarrollo.',
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
            image: `${pawsome}`,
            title: 'Pawsome E-Commerce App',
            description:
              'Tienda online desarrollada con React JS. Permite navegar productos, filtrarlos por categoría, agregarlos al carrito y finalizar la compra. Usa Firebase para autenticación y base de datos.',
            link: 'https://github.com/josefinacicchini/ecommerce-app',
          },
          {
            image: `${gestionClinica}`,
            title: 'Gestión de clínica de salud',
            description:
              'Aplicación de escritorio desarrollada en equipo de trabajo con las tecnologías .Net, Winforms y MySQL como base de datos. La aplicación tiene como objetivo gestionar registro de pacientes y citas, historial clínico y generar un reporte de honorarios del personal médico de la clínica.',
            link: 'https://github.com/media-docena/seprice',
          },
          {
            image: `${clubDeportivo}`,
            title: 'Gestión de club deportivo',
            description:
              'Aplicación de escritorio desarrollada en equipo de trabajo con las tecnologías .Net, Winforms y MySQL como base de datos. La aplicación tiene como objetivo gestionar registro de socios y no socios de un club deportivo, gestionar el pago de cuota y servicios deportivos del club y generar el carnet de socios.',
            link: 'https://github.com/media-docena/sports-clubv2',
          },
        ]}
      />
      {/* Tecnologías con las que trabajo section */}
      <Tecnologias
        technologies={[
          {
            image: `${react}`,
            name: 'React',
          },
          {
            image: `${node}`,
            name: 'NodeJS',
          },
          {
            image: `${csharp}`,
            name: 'C#',
          },
          {
            image: `${git}`,
            name: 'Git',
          },
          {
            image: `${mysql}`,
            name: 'MySQL',
          },
        ]}
      />
    </div>
  );
}
