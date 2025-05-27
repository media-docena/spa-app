import React from 'react';
import Profile from '../../components/integrantes/Profile';
import Skills from '../../components/integrantes/Skills';
import avatar03 from '../../assets/img/avatar03.png';
import Projects from '../../components/integrantes/Projects';
import Tecnologias from '../../components/integrantes/Tecnologias';
import react from '../../assets/img/tech-logos/react.svg';
import node from '../../assets/img/tech-logos/nodejs.svg';
import csharp from '../../assets/img/tech-logos/csharp.svg';
import git from '../../assets/img/tech-logos/git.svg';
import mysql from '../../assets/img/tech-logos/mysql.svg'; 

export default function Ro() {
  return (
    <div>
      {/* Profile section */}
      <Profile
        name="rosana cohen"
        role="software developer"
        description="Como desarrolladora de software, me impulsa la oportunidad de construir soluciones 
        que generen valor real.  Tengo experiencia en tecnologías como React, NodeJS, MySQL, Git, 
        entre otros y me enfoco en crear aplicaciones y sistemas que sean no solo técnicamente sólidos, 
        sino también fáciles de usar y que resuelvan problemas reales para los usuarios."
        image={avatar03}
      />
      {/* Skills section */}
      <Skills
        subtitle={`Habilidades técnicas y blandas que he adquirido a lo largo de mi
            trayecto en la tecnicatura y a nivel personal a partir de proyectos.`}
        skills={[
          {
            title: 'Desarrollo web full stack',
            description:
              'Tengo experiencia construyendo interfaces modernas con React, integrando APIs y trabajando con bases de datos relacionales y no relacionales.',
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
            title: 'Gestión de versiones con Git',
            description:
              'Uso Git y GitHub como herramientas esenciales para el control de versiones y el trabajo colaborativo.',
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
            title: 'Diseño responsive y accesible',
            description:
              'Aplico principios de diseño accesible y responsivo con TailwindCSS o CSS puro para asegurar una buena experiencia en cualquier dispositivo.',
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
            title: 'Pensamiento crítico',
            description:
              'Me gusta analizar los problemas desde diferentes ángulos para encontrar soluciones eficientes y sostenibles.',
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
            title: 'Trabajo en Autonomía y proactividad',
            description:
              'Me gusta tomar la iniciativa, investigar por mi cuenta y adaptarme rápidamente a nuevos desafíos o tecnologías.',
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
            title: 'Comunicación clara',
            description:
              'Siempre busco que la comunicación sea abierta, empática y efectiva.',
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
            title: 'Gestión de clínica de salud',
            description:
              'Aplicación de escritorio desarrollada en equipo de trabajo con las tecnologías .Net, Winforms y MySQL como base de datos. La aplicación tiene como objetivo gestionar registro de pacientes y citas, historial clínico y generar un reporte de honorarios del personal médico de la clínica.',
            link: 'https://github.com/media-docena/seprice',
          },
          {
            image:
              'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Gestión de club deportivo',
            description:
              'Aplicación de escritorio desarrollada en equipo de trabajo con las tecnologías .Net, Winforms y MySQL como base de datos. La aplicación tiene como objetivo gestionar registro de socios y no socios de un club deportivo, gestionar el pago de cuota y servicios deportivos del club y generar el carnet de socios.',
            link: 'https://github.com/media-docena/sports-clubv2',
          },
          {
            image:
              'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Aplicación de E-commerce',
            description:
              'Proyecto personal de E-commerce desarrollado con python, django y sqlite para la base de datos. El proyecto sigue los lineamientos del curso dado por Harvad de desarrollo web CS50Web. Se puede agregar un producto para la venta y editarlo en su lista. Como comprador se puede marcar productos para su seguimiento.',
            link: 'https://github.com/rocohen/commerce',
          },
        ]}
      />
      {/* Tecnologías con las que trabajo */}
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
