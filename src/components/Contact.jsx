import React from 'react';
import { useIntl } from 'react-intl';

function Contact() {
  const intl = useIntl();

  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-blue-500 dark:text-blue-300">
          {intl.formatMessage({ id: 'contact.title' })}
        </h2>
        <form action="https://formspree.io/f/mqazkwnv" method="POST" className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              {intl.formatMessage({ id: 'contact.name' })}
            </label>
            <input type="text" name="name" id="name" className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-gray-700 border-2 border-blue-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-gray-200" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              {intl.formatMessage({ id: 'contact.email' })}
            </label>
            <input type="email" name="email" id="email" className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-gray-700 border-2 border-blue-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-gray-200" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              {intl.formatMessage({ id: 'contact.message' })}
            </label>
            <textarea name="message" id="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-gray-700 border-2 border-blue-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-gray-200" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-200 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
            {intl.formatMessage({ id: 'contact.send' })}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;