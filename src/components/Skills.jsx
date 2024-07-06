import React from 'react';
import { useIntl } from 'react-intl';
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase, FaGit } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiMysql, SiExpress, SiPostgresql, SiPostman, SiReact, SiBootstrap, SiSequelize, SiMongodb, SiGraphql } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { TbBrandVscode } from 'react-icons/tb';

function Skills() {
  const intl = useIntl();

  const skills = [
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaReact, name: 'React.js' },
    { icon: SiRedux, name: 'Redux' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaReact, name: 'React Native' },
    { icon: SiBootstrap, name: 'Bootstrap' },
    { icon: SiSequelize, name: 'Sequelize' },
    { icon: FaDatabase, name: 'Data Structure' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiExpress, name: 'Express' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: TbBrandVscode, name: 'Visual Studio' },
    { icon: SiPostman, name: 'Postman' },
    { icon: FaGit, name: 'Git' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: SiGraphql, name: 'GraphQL' },
    { icon: MdDesignServices, name: 'Material UI' },
  ];

  const softSkills = [
    { name: 'Leadership' },
    { name: 'Team Player' },
    { name: 'Creativity' },
    { name: 'Empathy' },
    { name: 'Dedication' },
    { name: 'Communicative' },
  ];

  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900" id="skills">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-blue-500 dark:text-blue-300">
        {intl.formatMessage({ id: 'skills.techSkills' })}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300">
            <skill.icon className="text-4xl mr-4 text-blue-500 dark:text-blue-300" />
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
          </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-12 mt-16 text-blue-500 dark:text-blue-300">
          {intl.formatMessage({ id: 'skills.softSkills' })}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {softSkills.map((skill, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300">
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;