import React from 'react';
import SkillCard from './SkillCard';

function Skills({ skills, subtitle }) {
  return (
    <div>
      <section className="bg-white rounded-lg my-4">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl underline decoration-blue-500 text-center">
            habilidades
          </h1>

          <p className="mt-4 max-w-xl text-gray-500 xl:mt-6 text-center mx-auto">
            {subtitle}
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {/* <SkillCards */}

            {skills &&
              skills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
