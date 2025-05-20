import React from 'react';
import CardAbout from './CardAbout';
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';
import avatar03 from '../../assets/img/avatar03.png';

export default function About() {
  return (
    <>
      <section className="bg-white rounded-lg">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Quienes Somos
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Media docena es el equipo de trabajo que se formó en el segundo
            cuatri del primer año de la Tecnicatura Superior de Desarrollo de
            Software a distancia. Muchos pasaron por el equipo, pero los que
            quedamos somos los 3 que estamos en esta presentación y si todo va
            bien, seguiremos hasta terminar la tecnicatura 🤞🏼.
          </p>

          {/* Trajeta de presentación cada integrante */}
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 text-center">
            <CardAbout
              name={'Josefina Cicchini'}
              position="Software Developer"
              image={avatar01}
              github={'https://github.com/josefinacicchini'}
            />
            <CardAbout
              name={'Francisco Agustín Cruz Guantay'}
              position="Software Developer"
              image={avatar02}
              github={'https://github.com/FACG-CODE'}
            />
            <CardAbout
              name={'Rosana Cohen'}
              position="Software Developer"
              image={avatar03}
              github={'https://github.com/rocohen'}
            />
          </div>
        </div>
      </section>
    </>
  );
}
