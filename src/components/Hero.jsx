import React from 'react';
import { useIntl } from 'react-intl';

function Hero() {
  const intl = useIntl();

  return (
    <section className="bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">{intl.formatMessage({ id: 'hero.greeting' })}</h2>
        <h3 className="text-2xl mb-8 text-gray-600 dark:text-gray-400">{intl.formatMessage({ id: 'hero.role' })}</h3>
        <a href="#contact" className="bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-200 py-3 px-8 rounded-full text-xl font-semibold shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
          {intl.formatMessage({ id: 'hero.contactButton' })}
        </a>
      </div>
    </section>
  );
}

export default Hero;