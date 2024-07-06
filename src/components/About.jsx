import React from 'react';
import { useIntl } from 'react-intl';

function About() {
  const intl = useIntl();

  const passionPoints = intl.formatMessage({ id: 'passionPoints' }).split(', ');

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-blue-500 dark:text-blue-300">
          {intl.formatMessage({ id: 'title' })}
        </h2>
        <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {intl.formatMessage({ id: 'greeting' })}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {intl.formatMessage({ id: 'introduction' })}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {intl.formatMessage({ id: 'passionIntro' })}
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
            {passionPoints.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {intl.formatMessage({ id: 'currentStatus' })}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {intl.formatMessage({ id: 'contactIntro' })}{' '}
            <a 
              href={`mailto:${intl.formatMessage({ id: 'email' })}`} 
              className="text-blue-500 dark:text-blue-300 hover:underline"
            >
              {intl.formatMessage({ id: 'email' })}
            </a>
          </p>
        </div>
      </div>  
    </section>
  );
}

export default About;